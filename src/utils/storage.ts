import { VALIDATION_RULES, ERROR_MESSAGES } from './constants';

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return ERROR_MESSAGES.REQUIRED_FIELD;
  }
  if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
    return ERROR_MESSAGES.INVALID_EMAIL;
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return ERROR_MESSAGES.REQUIRED_FIELD;
  }
  if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    return ERROR_MESSAGES.INVALID_PASSWORD;
  }
  if (!VALIDATION_RULES.PASSWORD_REGEX.test(password)) {
    return ERROR_MESSAGES.INVALID_PASSWORD;
  }
  return null;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string | null => {
  if (!confirmPassword) {
    return ERROR_MESSAGES.REQUIRED_FIELD;
  }
  if (password !== confirmPassword) {
    return ERROR_MESSAGES.PASSWORD_MISMATCH;
  }
  return null;
};