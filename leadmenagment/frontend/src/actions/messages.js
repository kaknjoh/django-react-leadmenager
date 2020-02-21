import { CREATE_MESSAGE } from "./types";

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payloads: msg
  };
};
