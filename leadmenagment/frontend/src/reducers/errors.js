import { GET_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payloads.msg,
        status: action.payloads.status
      };

    default:
      return state;
  }
}
