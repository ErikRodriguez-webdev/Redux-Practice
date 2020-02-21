import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const fetchPlayer = (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:8888/players")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: FETCH_SUCCESS, payload: response.tat });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const postPlayers = (dispatch) => {
  dispatch({ type: POST_DATA });
  axios
    .post("http://localhost:8888/players")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: POST_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: POST_ERROR, payload: error });
    });
};
