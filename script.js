const password = document.getElementById("pw");
const confirmPassword = document.getElementById("pw-confirm");
const passwordError = document.querySelector('#pw + p.pw-error');

  function validatePassword(){
    if(password.value != confirmPassword.value && confirmPassword.value != "") {
      confirmPassword.setCustomValidity("Passwords do not match");
      password.classList.add("error");
      confirmPassword.classList.add("error");
      passwordError.textContent = 'Passwords do not match';
    } else {
      confirmPassword.setCustomValidity('');
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
      passwordError.textContent = '';
    }
  }

password.onchange = validatePassword;
confirmPassword.onchange = validatePassword;