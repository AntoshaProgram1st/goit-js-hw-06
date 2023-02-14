const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
event.preventDefault();

const { elements: { email, password } } = event.currentTarget;

if (!email.value || !password.value) {
alert('Both email and password fields are required');
return;
}

const formData = {
email: email.value,
password: password.value
};

console.log(formData);
form.reset();
});