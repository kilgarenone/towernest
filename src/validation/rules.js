import * as ErrorMessages from "./errorMessages";

export const required = text => {
  if (text) {
    return null;
  }
  return ErrorMessages.isRequired;
};

export const mustMatch = (field, fieldName) => (text, state) =>
  state[field] === text ? null : ErrorMessages.mustMatch(fieldName);

export const minLength = length => text =>
  text.length >= length ? null : ErrorMessages.minLength(length);
