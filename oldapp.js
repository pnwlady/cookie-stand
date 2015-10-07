var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookCust: 5.2,
  dailyTotals: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (pikePlace.maxCustHour - pikePlace.minCustHour + 1)) + pikePlace.minCustHour;
  },

  totalCookHour: function() {
    return Math.floor(pikePlace.randCustHour() * pikePlace.avgCookCust);
  },
  runDailyTotals: function() {
    pikePlace.dailyTotals = [];
    for(var i = 0; i < 8; i++) {
      pikePlace.dailyTotals.push(pikePlace.totalCookHour());
      console.log(pikePlace.dailyTotals);
    }
  }
 }

var hoursInDay = [10, 11, 12, 1, 2, 3, 4, 5, 6];
item.appendChild(document.createTextNode(array[i] + ': ' + pikePlace.totalCookieHour() + ' cookies'));

 pikePlace.makeUL = function(array) {
  for(var i = 0; i < array.length; i++) {
    var listPike = document.getElementById('Pike');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(array[i]));
    listPike.appendChild(li);
    }
  };

pikePlace.randCustHour();
pikePlace.totalCookHour();
pikePlace.runDailyTotals();
pikePlace.makeUL(pikePlace.dailyTotals);

//li.appendChild(document.createTextNode(array[i] + ': ' + pikePlace.totalCookieHour() + ' cookies'));

var seaTac = {
  location: 'SeaTac Airport',
  minCustHour: 6,
  maxCustHour: 44,
  avgCookCust: 1.2,
  dailyTotals: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  },

  runDailyTotals: function() {
    this.dailyTotals = [];
    for(var i = 0; i < 8; i++) {
      this.dailyTotals.push(this.totalCookHour());
      console.log(this.dailyTotals);
    }
  }
 }

 var southcntrMall = {
  location: 'Southcenter Mall',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookCust: 1.9,
  dailyTotals: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  },

  runDailyTotals: function() {
    this.dailyTotals = [];
    for(var i = 0; i < 8; i++) {
      this.dailyTotals.push(this.totalCookHour());
      console.log(this.dailyTotals);
    }
  }
 }

 var bellevueSqu = {
  location: 'Bellevue Square',
  minCustHour: 20,
  maxCustHour: 48,
  avgCookCust: 3.3,
  dailyTotals: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  },

  runDailyTotals: function() {
    this.dailyTotals = [];
    for(var i = 0; i < 8; i++) {
      this.dailyTotals.push(this.totalCookHour());
      console.log(this.dailyTotals);
    }
  }
 }

 var alki = {
  location: 'Alki',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookCust: 2.6,
  dailyTotals: [],

  randCustHour: function() {
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  },

  totalCookHour: function() {
    return Math.floor(this.randCustHour() * this.avgCookCust);
  },

  runDailyTotals: function() {
    this.dailyTotals = [];
    for(var i = 0; i < 8; i++) {
      this.dailyTotals.push(this.totalCookHour());
      console.log(this.dailyTotals);
    }
  }
 }




