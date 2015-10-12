var storeForm = (function() {
  var form = document.getElementById('submit');

  addEvent(form, 'submit', function(e));
  e.preventDefault();
  var elements = this.elements;
  var locName = elements.locName.value;
  var minCust = elements.minCust.value;
  var maxCust = elements.maxCust.value;
  var avgCookies = elements.avgCookies.value;


}());



  e.preventDefault();
  var storeLoc = document.getElementById('storeLoc');
  var minCust = document.getElementById('minCust');
  var maxCust = document.getElementById('maxCust');
  var avgCookies = document.getElementById('avgCookies');
  //See if inputs have data
  if(!storeLoc.value || !minCust.value || !maxCust || !avgCookies.value) {
    return alert('No data entered. Complete the form to recieve your projections.');
  }
  //Check for inputs to be numbers
  else if (isNan(minCust.value) || isNan(maxCust.value) || isNan(avgCookies.value)) {
    return alert('Please enter numbers in the boxes.');
  }
  //check for debugging
  else {
    console.log('new store location = ' + storeLoc.value);
    console.log('min customers for ' + storeLoc.value + ' = ' + minCust.value);
    console.log('max customers for ' + storeLoc.value + ' = ' + maxCust.value);
    console.log('avg cookies per customer for ' + storeLoc.value + ' = ' + avgCookies.value);
  }

  var newStore = new cookieStand(storeLoc.value, minCust.value, maxCust.value, avgCookies.value);



