import axios from "axios";

import { GET_LEADS } from "./types";

// GET LEADS  akcija

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payloads: res.data
      });
    })
    .catch(err => console.log(err));
};
