funtion checkLength(e, minLength) {
  var el, elMsg;
  if (!e) {
    e = window.event;
  }
  el = e.target|| e.srcElement;
  elMsg = el.NextSibling;

  if (el.value.length < minLength) {
    elMsg.innerHTML = 'Username must ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';
  }
}

var elUsername = document.getElementById('username');
if (elusername.addEventListener) {
  elUsername.addEventListener('click', function(e)) {
    checkUsername(e, 5);
  }, false);
} else {
    elUsername.attachEvent('onclick', function(e)) {
      checkUsername(e, 5);
    });
}
