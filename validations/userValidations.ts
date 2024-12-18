import * as Validation from "../utils/validation";

export const validateRegisterUserInputs = (body: any): string[] => {
  const { email, username, password, role } = body;
  const errors: string[] = [];

  if (!Validation.isValidEmail(email)) {
    errors.push("Invalid email format");
  }
  if (!Validation.isValidUsername(username)) {
    errors.push("Username can't be empty");
  }
  if (!Validation.isValidPassword(password)) {
    errors.push("Password must be at least 6 characters long");
  }
  if (role && !Validation.isValidRole(role)) {
    errors.push("Role can only be CUSTOMER");
  }
  return errors;
};

export const validateLoginUserInputs = (body: any): string[] => {
  const { email, password } = body;
  const errors: string[] = [];

  if (!Validation.isValidEmail(email)) {
    errors.push("Invalid email format");
  }

  if (!Validation.isValidPassword(password)) {
    errors.push("Password must be at least 6 characters long");
  }
  return errors;
};
