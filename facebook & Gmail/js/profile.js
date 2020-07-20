var current = localStorage.getItem("Rukeshr16@gmail.com");
var demo = document.getElementById("demo");
var userdata  = JSON.parse(current);
email.innerText = userdata.email;
pass.innerText = userdata.pwd;

