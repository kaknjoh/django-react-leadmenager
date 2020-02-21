import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return;
      action.payloads;
    case CREATE_MESSAGE:
      return (state = action.payloads);
    default:
      return state;
  }
}
