import { CREATE_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payloads: msg
  };
};

// RETURN ERRORS

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payloads: { msg, status }
  };
};
