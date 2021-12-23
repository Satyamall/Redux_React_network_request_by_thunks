import { authConstants } from "./actionTypes";

export const loginSuccess = (token) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      token: token
    }
  };
};
