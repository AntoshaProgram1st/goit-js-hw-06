const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener("blur", function(){
    if (validationInput.value.length !== +validationInput.dataset.length) {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
      } else {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
      }
    });