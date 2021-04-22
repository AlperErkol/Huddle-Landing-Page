const inputMail = document.querySelector(".inp");
const errorMessage = document.querySelector("#errorMessage");
const submitButton = document.querySelector(".submitButton");
const form = document.getElementById("submit-form");
// event Listener

submitButton.addEventListener('click',e=>{

    var mail = inputMail.value;

    var check = validateEmail(mail);

    if(check != true){

        errorMessage.classList.remove("d-none");

    }
    else{
        if(!errorMessage.classList.contains("d-none")){
            errorMessage.classList.add("d-none");
        }
    }


});


function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}