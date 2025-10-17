function showError(input, message) {
    const errorElement = input.nextElementSibling;
    input.classList.add('input-error');
    errorElement.innerText = message;
  }
  