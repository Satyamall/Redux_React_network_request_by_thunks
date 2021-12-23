import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/app/action";

export const getTodos = () => (dispatch) => {
  // pre fetch
  const requestAction = getTodosRequest();
  dispatch(requestAction);
  return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = getTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getTodosFailure();
      dispatch(failureAction);
    });
};

export const addTodos = (text) => (dispatch) => {
  const requestAction = addTodosRequest();
  dispatch(requestAction);
  return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: text,
      status: false
    })
  })
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = addTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = addTodosFailure();
      dispatch(failureAction);
    });
};
