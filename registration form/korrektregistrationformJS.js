const findForm = document.forms.form;
const findAllInputs = document.querySelectorAll('input');
const findFirstName = findForm.elements['firstName'];
const findLastName = findForm.elements['lastName'];
const emailForm = findForm.elements['email'];
const passwordForm = findForm.elements['password'];
const genderForm = findForm.elements['gender'];
const ageForm = findForm.elements['age'];
const agreementForm = findForm.elements['agreement'];
const findButton = findForm.elements['button'];
const errorMessage = document.getElementById('errorMessage');
const errorMessageFirstName = document.getElementById('errorMessageFirstName');
const errorMessageLastName = document.getElementById('errorMessageLastName');
const errorMessageEmail = document.getElementById('errorMessageEmail');
const errorMessagePassword = document.getElementById('errorMessagePassword');
const errorMessageAge = document.getElementById('errorMessageAge');
const errorMessageGender = document.getElementById('errorMessageGender');
const errorMessageAgreement = document.getElementById('errorMessageAgreement');
const validRegexFirstName = /[a-zA-Zа-яёА-ЯЁ]{2,20}$/;
const validRegexLastName = /[a-zA-Zа-яёА-ЯЁ]{2,}$/;
const validRegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validRegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;

emailForm.oninput = function () {
    let isValidEmail = validRegexEmail.test(emailForm.value.trim());
    if (!isValidEmail){
        errorMessageEmail.textContent = "*email введен неверно";
        emailForm.style.borderColor = "red";
    } else { 
        errorMessageEmail.textContent = "";
        emailForm.style.borderColor = "green";
    }
};

function validateFirstName() {
    let isValidFirstName = validRegexFirstName.test(findFirstName.value.trim());
    if (!isValidFirstName){
        errorMessageFirstName.textContent = "*Имя введено неверно";
        findFirstName.style.borderColor = "red";
    }    else { 
        errorMessageFirstName.textContent = "";
        findFirstName.style.borderColor = "green";
    } 
};
findFirstName.oninput = validateFirstName;

function validateLastName() {
    let isValidLastName = validRegexLastName.test(findLastName.value.trim());
    if (!isValidLastName) {
      errorMessageLastName.textContent = "*Фамилия введена неверно";
      findLastName.style.borderColor = "red";
    } else {
      errorMessageLastName.textContent = "";
      findLastName.style.borderColor = "green";
    }
  };

findLastName.oninput = validateLastName;

function validatePassword() {

    let isValidPassword = validRegexPassword.test(passwordForm.value.trim());
    console.log(isValidPassword);
    if (!isValidPassword) {
      errorMessagePassword.textContent = "*Пароль введен неверно,должно быть не менее 8 символов и содержать как минимум одну заглавную букву, одну строчную букву, один символ и одну цифру";
      passwordForm.style.borderColor = "red";
    } else {
      errorMessagePassword.textContent = "";
      passwordForm.style.borderColor = "green";
    }
  };
passwordForm.oninput = validatePassword;

function validateAge() {
    if (ageForm.value.trim().length === 0) {
		errorMessageAge.textContent = "*Заполните, пожалуйста, это поле";
        ageForm.style.borderColor = "red";
    } else { errorMessageAge.textContent = "";
	ageForm.style.borderColor = "green";
	}
  }
ageForm.onchange = validateAge; 

let isChecked = false; 
findForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Cancel the form submission
  // Reset error messages and styles
    errorMessage.textContent = "";
    errorMessageFirstName.textContent = "";
    errorMessageLastName.textContent = "";
    errorMessageEmail.textContent = "";
    errorMessagePassword.textContent = "";
    errorMessageAge.textContent = "";
    errorMessageGender.textContent = "";
    errorMessageAgreement.textContent = "";

findAllInputs.forEach((input) => {
  //this
  if (input.value.trim().length === 0 && input.hasAttribute ('required') && isChecked) 
  {errorMessage.textContent = "*заполните, пожалуйста, все поля";
  errorMessageAgreement.textContent = "*Подтвердите согласие";
    findButton.disabled = true;
    } else {
    findButton.disabled = false;
    errorMessageAgreement.textContent = "";
    //validatecheckbox();
    errorMessage.textContent = "";
    this.reset();
    console.log(input.value);
    }
  });
}); 
  
agreementForm.addEventListener("click", (event) => {  // Additional validation for agreement field
  //let isChecked = false;
  console.log(agreementForm.checked);
  if (!agreementForm.checked) {
    errorMessageAgreement.textContent = "*Подтвердите согласие";
    isChecked = false;
  }else{
    errorMessageAgreement.textContent = "";
    isChecked = true;
  }
  return isChecked;
  });
  //findForm.onsubmit = validatecheckbox;

  

  findAllInputs.forEach((input) => {
    input.addEventListener('focus', function () {
    input.style.outlineColor = "blue";
    });
    input.addEventListener('blur', function () {
    input.style.outlineColor = "rgb(209, 209, 209)";
    });
    
  });
