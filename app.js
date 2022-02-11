document.getElementById("log-in").addEventListener("click", function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // get password 
    const userPasswordField = document.getElementById("user-password");
    const userPassword = userPasswordField.value;
    if(userEmail == "secret@gmail.com" && userPassword == "secret" ){
        window.location.href = "bank.html";
    }
    else{
        alert("user/password error");
    }
});
