function emailValidation() {
    var text = document.getElementById('email').value;
    var emailID = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g ;
    if (emailID.test(text) ) {
        document.getElementById('emailLabel').innerHTML= "Valid address";
        document.getElementById('emailLabel').style.visibility="visible";
        document.getElementById('emailLabel').style.color="green";
    }else if(text === "" || text === null){
        document.getElementById('emailLabel').innerHTML= "Enter email address";
        document.getElementById('emailLabel').style.visibility="visible";
        document.getElementById('emailLabel').style.color="red";  
    } 
    else {
        document.getElementById('emailLabel').innerHTML= "Invalid Address";
        document.getElementById('emailLabel').style.visibility="visible";
        document.getElementById('emailLabel').style.color="red";
    }
}
