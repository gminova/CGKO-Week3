//Remove spaces from postcode
function removeSpaces(postcode) {
  return postcode.replace(/\s/g, "");
}

//Function which filters categories by number of crimes

function categoriesIterator(policeObj) {
  let uniquCats = new Set([]);
  policeObj.forEach(element => {
    uniquCats.add(element.category);
  });
  uniquCats = Array.from(uniquCats);

  let numByCat = [];
  for (let i = 0; i < uniquCats.length; i++) {
    let count = 0;
    for (let j = 0; j < policeObj.length; j++) {
      if (uniquCats[i] === policeObj[j].category) {
        count++;
      }
    }
    numByCat.push(count);
    count = 0;
  }

  let objByCat = {};
  for (let i = 0; i < uniquCats.length; i++) {
    objByCat[uniquCats[i]] = numByCat[i];
  }
  return objByCat;
}

let search = document.querySelector("#searchButton");
search.addEventListener("click", query);

function query() {
  let e = document.querySelector("ul");
  e.innerHTML = "";

  let postcode = document.querySelector("#searchField").value;
  //API call to validate postcode
  let valid = new XMLHttpRequest();
  let urlValid = `https://api.postcodes.io/postcodes/${postcode}/validate`;

  valid.onreadystatechange = function() {
    if (valid.readyState == 4 && valid.status == 200) {
      let response = JSON.parse(valid.responseText);
      if (response.result) {
        location(postcode);
      } else {
        // Delay alert after old data has been cleared
        function first() {
          setTimeout(function() {
            alert("Please, enter a valid postcode, e.g. SW1A 1AA");
          }, 1);
        }
        function second() {
          let numCrimes = document.querySelector(".numberOfCrimes");
          numCrimes.textContent = "Number of crimes:";
        }

        first();
        second();
      }
    }
  };
  valid.open("GET", urlValid, true);
  valid.send();

  function location(postcode) {
    postcode = removeSpaces(postcode);
    let xhr = new XMLHttpRequest();
    let urlLocation = `https://api.postcodes.io/postcodes/${postcode}`;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        let lat = response.result.latitude;
        let long = response.result.longitude;

        //check date is not in the future or current month
        let today = new Date();
        let currentMonth = today.getMonth() + 1;

        let month = document.querySelector("#month").value;
        if(currentMonth <= month) {
          alert("Please, select a date in the past");
        } else {
        let year = document.querySelector("#year").value;
        policeAPI(lat, long, month, year);
        }
      }
    };
    xhr.open("GET", urlLocation, true);
    xhr.send();
  }
}
// / Police API

let policeAPI = function(la, lo, month, year) {
  let xhr = new XMLHttpRequest();
  let URL = `https://data.police.uk/api/crimes-at-location?date=${year}-${month}&lat=${la}&lng=${lo}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let policeObj = JSON.parse(xhr.responseText);

      let totalCrimes = policeObj.length;
      let crimeNum = document.querySelector(".numberOfCrimes");
      crimeNum.textContent = `Number of crimes: ${totalCrimes}`;

      //POPULATE WITH CATEGORIES WITH COUNT OF CRIMES
      let categories = Object.keys(categoriesIterator(policeObj));
      let numbers = Object.values(categoriesIterator(policeObj));

      for (let i = 0; i < categories.length; i++) {
        let newLine = document.createElement("li");
        let parentCrimes = document.querySelector(".categoriesOfCrimes");
        parentCrimes.appendChild(newLine);

        newLine.textContent = `${categories[i]}: ${numbers[i]}`;        
      }
    }
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
