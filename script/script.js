var errLine = document.getElementById("error-line")
errLine.innerHTML = ""

function validation(e){
    e.preventDefault()
    var nameInput = document.getElementById("name").value
    var dobInput = document.getElementById("dob").value
    var emailInput = document.getElementById("email").value
    var addressInput = document.getElementById("address").value
    var maleInput = document.getElementById("male").checked
    var femaleInput = document.getElementById("female").checked

    var dateNow = new Date()
    var dateInput = new Date(dobInput)

    var emailArr = emailInput.split('@')
    var validDomains = ["binus.ac.id", "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];

    if(nameInput == ""){
        errLine.innerHTML = "Name must not empty!"
    }    
    else if(emailInput == ""){
        errLine.innerHTML = "Email must not empty!"
    }
    else if(!validDomains.includes(emailArr[1])){
        errLine.innerHTML = "Domain email must be valid"
    }
    else if(addressInput == ""){
        errLine.innerHTML = "Address must not empty!"
    }
    else if(dobInput == ""){
        errLine.innerHTML = "Date of Birth must not empty!"
    }
    else if(dateInput > dateNow){
        errLine.innerHTML = "Invalid Date of Birth"
    }
    else if(!maleInput && !femaleInput){
        errLine.innerHTML = "Gender must not empty!"
    }
    else{
        errLine.innerHTML = ""
        alert("Successfull Register!")
        location.reload();
    }
}