function validForm() {
    var email = document.myForm.email.value;
    var password = document.myForm.pass.value;
    
    if (email==null || email=="") {
        alert("Email address can't be blank");
        return false; 
    } else if(password.length<6){
        alert("Password must be atleast 6 character");
        return false;
    }if(password.length>12){
        alert("Password must be less than 12 character")
    }
        
}
