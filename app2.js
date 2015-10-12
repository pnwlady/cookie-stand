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

(function() {
  var myform = document.getElementById('form');

  myform.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("This is line 60");
  var elements = this.elements;
  var locName = document.getElementById('locName').value;
  var minCust = document.getElementById('minCust').value;
  var maxCust = document.getElementById('maxCust').value;
  var avgCookies = document.getElementById('avgCookies').value;

  var newStore = new CookieStand(locName, minCust, maxCust, avgCookies);
  });
}());






