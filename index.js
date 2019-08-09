//autocomplete
let input = document.getElementById("searchField");
input.addEventListener("input", call);

function call() {
  let empty = document.getElementById("myDatalist");
  empty.innerHTML = "";
  let queryString = encodeURIComponent(input.value);

  let url = `https://postcodes.io/postcodes/${queryString}/autocomplete`;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      let datalist = document.getElementById("myDatalist");
      response.result.forEach(e => {
        let child = document.createElement("option");
        child.value = e;
        datalist.appendChild(child);
      });
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
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

let numCrimes = document.querySelector(".numberOfCrimes");

function query() {
  let e = document.querySelector("ol");
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
          alert("Please, enter a valid postcode, e.g. SW1A 1AA");
          numCrimes.textContent = "Total number of crimes: ";
          let catCrimes = document.querySelector(".text");
          catCrimes.textContent = `Categories of crimes `;
      }
    }
  };
  valid.open("GET", urlValid, true);
  valid.send();

  function location(postcode) {
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
        let currentYear = today.getFullYear();

        let month = document.querySelector("#month").value;
        let year = document.querySelector("#year").value;

        if(month >= currentMonth && year >= currentYear) {
            alert("Please, select a date in the past");
            numCrimes.textContent = "Total number of crimes: ";
            let catCrimes = document.querySelector(".text");
            catCrimes.textContent = `Categories of crimes `;
        } else {
            policeAPI(lat, long, month, year, postcode);
        }
      }
    };
    xhr.open("GET", urlLocation, true);
    xhr.send();
  }
}
// / Police API

let policeAPI = function(la, lo, month, year, postcode) {
  let xhr = new XMLHttpRequest();
  let URL = `https://data.police.uk/api/crimes-at-location?date=${year}-${month}&lat=${la}&lng=${lo}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let policeObj = JSON.parse(xhr.responseText);

      let totalCrimes = policeObj.length;
      let yourResults = document.querySelector(".yourResults");
      yourResults.textContent = `Your Results for ${month}/${year}`;
      let crimeNum = document.querySelector(".numberOfCrimes");
      crimeNum.textContent = `Total number of crimes: ${totalCrimes}`;
      let catCrimes = document.querySelector(".text");
      catCrimes.textContent = `Categories of crimes in ${postcode.toUpperCase()}`;

      //POPULATE WITH CATEGORIES WITH COUNT OF CRIMES
      let categories = Object.keys(categoriesIterator(policeObj));
      let numbers = Object.values(categoriesIterator(policeObj));

      for (let i = 0; i < categories.length; i++) {
        let newLine = document.createElement("li");
        let parentCrimes = document.querySelector(".categoriesOfCrimes");
        parentCrimes.appendChild(newLine);

        newLine.textContent = `${categories[i].charAt(0).toUpperCase() + categories[i].split('-').join(' ').slice(1)}: ${numbers[i]}`;        
      }
    }
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
