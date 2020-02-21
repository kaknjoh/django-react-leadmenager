import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

// GET LEADS  akcija

export const getLeads = () => dispatch => {
  axios
    .get("/api/lead/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payloads: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE LEAD akcija

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/lead/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payloads: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD akcija
export const addLead = lead => dispatch => {
  axios
    .post(`/api/lead/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead added" }));
      dispatch({
        type: ADD_LEAD,
        payloads: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payloads: errors
      });
    });
};
