var CookieStand = function(place, minCustHour, maxCustHour, avgCookCust, id) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookCust = avgCookCust;
  this.id = id;
  this.cookiesByHourList = [];
  this.dailyCookies = 0;
  this.hoursOfOperation = [10, 11, 12, 1, 2, 3, 4, 5];

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  };
  this.totalCookHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  };
  this.runDailyTotals = function() {
    for(var i = 0; i < 8; i++) {
      this.cookiesByHourList.push(this.totalCookHour());
      this.dailyCookies = this.dailyCookies + this.totalCookHour();
      // console.log("24-hour time: " + (i + 10) + this.dailyCookies);
      // console.log("running total of cookies: " + this.dailyCookies)
      // console.log("Here is the dailyCookies array being built: " + this.cookiesByHourList);
    };
  };
  this.runDailyTotals();
  console.log(this.cookiesByHourList.length);

  this.makeUL = function(id) {
    for(var i = 0; i < this.cookiesByHourList.length; i++) {
      var ul = document.getElementById(this.id);
      var listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(this.hoursOfOperation[i] + ': ' + this.cookiesByHourList[i]));
      ul.appendChild(listItem);
    };
  };
  this.makeUL(this.id);
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'Pike');
var seaTac = new CookieStand('Seatac Airport', 6, 44, 1.2, 'Seatac');
var southcntr = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'Southcntr');
var bellSqr = new CookieStand('Bellevue Square', 20, 48, 3.3, 'Bellevue');
var alki = new CookieStand('Alki', 3, 24, 2.6, 'Alki');



