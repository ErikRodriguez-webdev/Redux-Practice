import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SERVERDATA = "FETCH_SERVERDATA";

export const postPlayer = (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .post("http://localhost:8888/players")
    .then((response) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const getPlayers = (dispatch) => {
  dispatch({ type: FETCH_SERVERDATA });
  axios
    .get("http://localhost:8888/players")
    .then((response) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};
