function clearError(input) {
    const errorElement = input.nextElementSibling;
    input.classList.remove('input-error');
    errorElement.innerText = "";
    }
    