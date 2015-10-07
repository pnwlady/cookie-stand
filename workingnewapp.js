
var CookieStand = function(place, minCustHour, maxCustHour, avgCookCust) {
  this.place = place;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookCust = avgCookCust;
  this.cookiesByHourList = cookiesByHourList [];

  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  this.totalCookHour = function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
    };
  };
  this.runDailyTotals = function() {
    for(var i = 0; i < 8; i++) {
      this.cookiesByHourList.push(this.totalCookHour());
      dailyCookies = dailyCookies + this.totalCookHour();
      console.log("24-hour time: " + (i + 10) + dailyCookies);
      console.log("running total of cookies: " + dailyCookies)
      console.log("Here is the dailyCookies array being built: " + this.cookiesByHourList);
      console.log(this.cookiesByHourList);
    };
    return dailyCookies;
    }
 };

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('Seatac Airport', 6, 44, 1.2);
var southcntr = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellSqr = new CookieStand('Bellevue Square', 20, 48, 3.3)




