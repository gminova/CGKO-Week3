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
    if (xhr.readyState === 4 && xhr.status === 200) {
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

const categoriesIterator = allCrimes => {
  let categories = [];
  allCrimes.map(crime => categories.push(crime.category));

  let numCrimesByCategory = [];

  categories.forEach(category => {
    let count = 0;
    allCrimes.forEach(crime => {
      if (category === crime.category) {
        count++;
      }
    });
    numCrimesByCategory.push(count);
    count = 0;
  });

  let crimeCountByCategory = {};
  categories.map(
    (category, i) => (crimeCountByCategory[category] = numCrimesByCategory[i])
  );
  return crimeCountByCategory;
};

let search = document.querySelector("#searchButton");
search.addEventListener("click", query);

//Search on Enter
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    search.click();
  }
});

let numCrimes = document.querySelector(".numberOfCrimes");

function query() {
  let e = document.querySelector("ol");
  e.innerHTML = "";

  let postcode = document.querySelector("#searchField").value;
  //API call to validate postcode
  let valid = new XMLHttpRequest();
  let urlValid = `https://api.postcodes.io/postcodes/${postcode}/validate`;

  valid.onreadystatechange = function() {
    if (valid.readyState === 4 && valid.status === 200) {
      let response = JSON.parse(valid.responseText);
      if (response.result) {
        location(postcode);
      } else {
        alert("Please, enter a valid postcode, e.g. SW1A 1AA");
        numCrimes.textContent = "Total number of crimes is ";
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
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let lat = response.result.latitude;
        let long = response.result.longitude;

        //check date is not in the future or current month
        let today = new Date();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();

        let month = document.querySelector("#month").value;
        let year = document.querySelector("#year").value;

        if (month >= currentMonth && year >= currentYear) {
          alert("Please, select a date in the past");
          numCrimes.textContent = "Total number of crimes is ";
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

// Get data from Police API

let policeAPI = function(la, lo, month, year, postcode) {
  let xhr = new XMLHttpRequest();
  let URL = `https://data.police.uk/api/crimes-at-location?date=${year}-${month}&lat=${la}&lng=${lo}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let allCrimes = JSON.parse(xhr.responseText);

      let totalCrimes = allCrimes.length;
      let yourResults = document.querySelector(".yourResults");
      yourResults.textContent = `Your Results for ${month}/${year}`;
      let crimeNum = document.querySelector(".numberOfCrimes");
      crimeNum.textContent = `Total number of crimes is ${totalCrimes}`;
      let catCrimes = document.querySelector(".text");
      catCrimes.textContent = `Categories of crimes in ${postcode.toUpperCase()}`;

      //POPULATE WITH CATEGORIES WITH COUNT OF CRIMES
      let crimes = Object.entries(categoriesIterator(allCrimes));

      crimes.forEach(crime => {
        let newLine = document.createElement("li");
        let parentCrimes = document.querySelector(".categoriesOfCrimes");
        parentCrimes.appendChild(newLine);

        newLine.textContent = `${crime[0].charAt(0).toUpperCase() +
          crime[0]
            .split("-")
            .join(" ")
            .slice(1)}: ${crime[1]}`;
      });
    }
  };
  xhr.open("GET", URL, true);
  xhr.send();
};
