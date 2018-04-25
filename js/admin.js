var today = new Date();
var year = today.getFullYear();
var est = new Date('Nov 16, 2003 09:30:21');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

var output = document.getElementById('admin');
output.textContent = Math.floor(difference) + 'years of leadership and administrative experiences...';