const form = document.querySelector('form');
const validName = document.querySelector('input[name="name"]');
const validTel = document.querySelector('input[name="tel"]');



const inputs = [validName, validTel]; 

  
let isFormValid = false; 
let isValidationOn= false;

const resetElm = (elm) => { //si es valido se sale la alerta de error 
    elm.nextElementSibling.classList.add("hidden");
}

const invalidateElm = (elm) => { //si es invalido mostramos el mensaje 
    elm.nextElementSibling.classList.remove("hidden"); 
}
const validateInputs = () => { //checkeamos que
    if (!isValidationOn) return; //if it is false 
    
    isFormValid = true; //now it is true and we are going to check the info 
    inputs.forEach(resetElm); 
    
    if (!validName.value) {  //if the email is empty 
        isFormValid=false; //the validation is not correct
        invalidateElm(validName); //we show that it is not valid. 
    }
    
    if (!validTel.value) {
        isFormValid=false;
        invalidateElm(validTel);
    }
}


inputs.forEach(input => { //everytime an input is clicked we must start validating them 
    input.addEventListener("input", () => {
        validateInputs();
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true; //the validation must be true to submit 
    validateInputs();
    if (isFormValid) { 
        window.location.replace("./thankyou.html")

    }
});

validEmail.addEventListener("input", () => {
    validateInputs();
});