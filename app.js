


//global variables
const passwordGenerate = document.getElementById("generate");
const generateResult = document.getElementById("generate-result");
const inputPassword = document.getElementById("input");
const matchPassword = document.getElementById("submit");
const successToast = document.getElementById("toast-success");
const wrongToast = document.getElementById("toast-wrong");
const copyToast = document.getElementById("toast-copy");
const copyText = document.getElementById("copy");

// hidden toast message
successToast.style.visibility = "hidden";
wrongToast.style.visibility = "hidden";
copyToast.style.visibility = "hidden";

//Generate the password

function generatePassword() {
  let firstNumber = Math.floor(Math.random() * 10);
  let secondNumber = Math.floor(Math.random() * 10);
  let thirdNumber = Math.floor(Math.random() * 10);
  let fourthNumber = Math.floor(Math.random() * 10);
  return `${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`;
}


//generate password button functionality
passwordGenerate.addEventListener("click", function () {
  generateResult.innerText = generatePassword();
});

// insert Number
function insertNumber(num) {
  inputPassword.value = inputPassword.value + num;
}

//substracting value
function subtractValue() {
  let exp = inputPassword.value;
  inputPassword.value = exp.substring(0, exp.length - 1);
}

//clear value
function clearAll() {
  inputPassword.value = "";
}

//mataching password
matchPassword.addEventListener("click", function () {
  const a = parseFloat(generateResult.innerText);
  const b = parseFloat(inputPassword.value);
  console.log(a, b);
  if (a == b) {
    successToast.style.visibility = "visible";
    setTimeout(() => {
      successToast.style.visibility = "hidden";
    }, 3000);
  } else {
    wrongToast.style.visibility = "visible";
    setTimeout(() => {
      wrongToast.style.visibility = "hidden";
    }, 3000);
  }
});



//copy button functionality
copyText.addEventListener("click", function () {
  const toast = document.getElementById("copyResult");
  let copytText = generateResult;
  navigator.clipboard.writeText(copytText.innerHTML);
  let copyPass = copytText.innerHTML;
  toast.innerHTML = `${copyPass} is copied`;
  copyToast.style.visibility = "visible";
  setTimeout(() => {
    copyToast.style.visibility = "hidden";
  }, 3000);
});
