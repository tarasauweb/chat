export function validateName(name) {
  if (!name.trim()) return 'Username is required';
  if (name.length < 2 || name.length > 20) return 'Username must be between 2 and 20 characters';
  if (!/^[A-Za-zА-Яа-яЁё\s]+$/.test(name)) return 'Username can only contain letters and spaces';
  return null;
}

export function validateEmail(email) {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
}

export function validatePassword(password) {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'The minimum password length is 6 characters';
  return null;
}