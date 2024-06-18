const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const queryGeneral = document.getElementById('queryGeneral');
const querySupport = document.getElementById('querySupport');
const message = document.getElementById('message');
const consent = document.getElementById('consent');

const showError = (element, message) => {
  const parent = element.parentElement;
  const grandParent = element.parentElement.parentElement;
  const errorMessage = grandParent.querySelector('.error-message');

  errorMessage.innerText = message;
  errorMessage.classList.add('display-error-message');
}

const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const emailRegex = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;

  if (fnameValue === '') {
    showError(fname, 'This field is required');
    fname.classList.add('error-state');
  }
  if (lnameValue === '') {
    showError(lname, 'This field is required');
    lname.classList.add('error-state');
  }
  if (emailValue === '') {
    showError(email, 'This field is required');
    email.classList.add('error-state');
  } else if (!emailRegex.test(emailValue)) {
    showError(email, 'Please enter a valid email address');
    email.classList.add('error-state');
  }
  if (!queryGeneral.checked && !querySupport.checked) {
    showError(queryGeneral, 'Please select a query type');
  }
  if (messageValue === '') {
    showError(message, 'This field is required')
    message.classList.add('error-state');
  }
  if (!consent.checked) {
    showError(consent, 'To submit this form, please consent to being contacted')
  }
}


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
})