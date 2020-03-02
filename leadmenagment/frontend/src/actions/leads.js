import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

// GET LEADS  akcija

export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/lead/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payloads: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD akcija

export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/lead/${id}/`, tokenConfig(getState))
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
export const addLead = lead => (dispatch, getState) => {
  axios
    .post(`/api/lead/`, lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Lead added" }));
      dispatch({
        type: ADD_LEAD,
        payloads: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
