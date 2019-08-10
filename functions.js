const functions = {
  test: function() {
    return "Tape is working! Hooray!";
  },

  categoriesIterator: function(allCrimes) {
    let categories = [];
    allCrimes.map(crime => {
      if (!categories.includes(crime.category)) {
        categories.push(crime.category);
      }
    });

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
  }
};

//only export if file not undefined
if (typeof module !== "undefined") {
  module.exports = functions;
}
