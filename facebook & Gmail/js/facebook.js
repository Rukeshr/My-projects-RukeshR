var user = {
    email :"Rukeshr16@gmail.com",
    pwd :"password"
}

localStorage.setItem(user.email,JSON.stringify(user));

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

    var form = document.myForm;
    console.log(form);

    var id = form["email"].value;
    var pwd = form["pass"].value;
    
    var userFound = localStorage.getItem(id);
    
    if(userFound === null){
        alert("User not found")
    }else{
        var current = JSON.parse(userFound);
        if (current["pwd"]=== pwd) {
            localStorage.setItem("Current",userFound);
            form.submit();
        }else{
            alert("Invalid password");
            return false;
        }

    }
        
}


