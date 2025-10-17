
function validatePassword(password) {
    const minLength = 8;
    if (password.length < minLength) {
      return 'Password must be at least 8 characters.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Must include at least one uppercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Must include at least one number.';
    }
    return '';
  }
  