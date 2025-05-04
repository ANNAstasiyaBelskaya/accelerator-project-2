const form = document.getElementById('form');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const phoneLabel = document.querySelector('label[for="phone"]');
const emailLabel = document.querySelector('label[for="email"]');
const submitButton = document.querySelector('button[type="submit"]');

const checkPhoneInputValue = () => {
  phoneInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9+]/g, '');
    if (this.value.length > 0 && phoneLabel) {
      phoneLabel.style.display = 'none';
    } else {
      phoneLabel.style.display = '';
    }
  });
};

const checkEmailInputValue = () => {
  emailInput.addEventListener('input', () => {
    if (emailInput.value.length > 0 && emailLabel) {
      emailLabel.style.display = 'none';
    } else {
      emailLabel.style.display = '';
    }
  });
};

const checkEmailValidity = () => {
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Zа-яё0-9._%+-]+@[a-zA-Zа-яё0-9.-]+\.[a-zA-Zа-яё]{2,4}$/i;

  return !emailRegex.test(emailValue);
};

const checkForm = () => {
  submitButton.addEventListener('click', (evt) => {
    let isFormValid = true;

    if (!checkEmailValidity()) {
      emailInput.classList.add('invalid');
      isFormValid = false;
    } else {
      emailInput.classList.remove('invalid');
    }

    if (!form.checkValidity()) {
      isFormValid = false;
    }

    if (!isFormValid) {
      evt.preventDefault();
    }
  });
};

export { checkEmailInputValue, checkPhoneInputValue, checkForm };
