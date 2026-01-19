export const APP_NAME = 'Second Vision';

export const STORAGE_KEYS = {
  ACCESS_TOKEN: '@second_vision_access_token',
  REFRESH_TOKEN: '@second_vision_refresh_token',
  USER_DATA: '@second_vision_user_data',
};

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
};

export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, and number',
  PASSWORD_MISMATCH: 'Passwords do not match',
  REQUIRED_FIELD: 'This field is required',
  NETWORK_ERROR: 'Network error. Please check your connection',
  SERVER_ERROR: 'Something went wrong. Please try again',
};

export const SUCCESS_MESSAGES = {
  SIGNUP_SUCCESS: 'Account created successfully!',
  LOGIN_SUCCESS: 'Welcome back!',
  LOGOUT_SUCCESS: 'Logged out successfully',
  PASSWORD_RESET_SENT: 'Password reset email sent. Check your inbox.',
};