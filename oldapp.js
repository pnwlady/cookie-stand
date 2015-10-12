var CookieStand = function(place, minCustHour, maxCustHour, avgCookCust) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookCust = avgCookCust;
  this.cookiesByHourList = [];
  this.dailyCookies = 0;
  this.hoursOfOperation = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };
  this.totalCookHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  };
  this.runDailyTotals = function() {
    for(var i = 0; i < 8; i++) {
    this.cookiesByHourList.push(this.totalCookHour());
    this.dailyCookies += this.totalCookHour();
    };
  };
  this.runDailyTotals();

  function makeTable(loc, array, total) {
    var location = document.getElementById('sales');
    var row = document.createElement('tr');
    row.appendChild(document.createTextNode(loc));
    location.appendChild(row);

    for(var i = 0; i < array.length; i++) {
      var hour = row;
      var data = document.createElement('td');
      data.appendChild(document.createTextNode(array[i]));
      hour.appendChild(data);
    };

    var totalData = document.createElement('td');
    totalData.appendChild(document.createTextNode(total));
    hour.appendChild(totalData);
  };
  makeTable(this.place, this.cookiesByHourList, this.dailyCookies);
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('Seatac Airport', 6, 44, 1.2);
var southcntr = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSqr = new CookieStand('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStand('Alki', 3, 24, 2.6);

var placeName = [pikePlace, seaTac, southcntr, bellSqr, alki];
for (var i = 0; i < placeName.length; i++) {
  placeName[i]
};

var storeSubmit = function(storeSubmit) {
  event.preventDefault();
  var locName = document.getElementById('locName');
  var minCust = document.getElementById('minCust');
  var maxCust = document.getElementById('maxCust');
  var avgCookies = document.getElementById('avgCookies');
  var formData = [];
};

var newStore = new CookieStand(locName.value, minCust.value, maxCust.value, avgCookies.value);

var el = document.getElementById("addButton");
el.addEventListener('click', storeSubmit);
// //end form/button area

// var formButton = document.getElementById('salesform');

// var formData =[];

// var handleFormSubmit = function(event) {
//   event.preventDefault();

//    if (!event.target.locName.value) {
//     return alert('Boxes cannot be empty!');
//    }

//    //creating a new instance... hint hint hint
//    var newForm = new form(event.target.locationname.value, event.target.blabbering.value);

//    console.log(event.target.locName.value); // SUPER IMPORTANT
//    console.log(event.target.blabbering.value); //SUPER IMPORTANT
//    event.target.locName.value = null;
//    event.target.blabbering.value = null;
//    tweetData.push(newTweet);
//    renderAllTweets();
//   };

// formButton.addEventListener('click', handleFormSubmit);


