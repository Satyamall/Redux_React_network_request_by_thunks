import { loadData, saveData } from "../../utils/localStorage";
import { authConstants } from "./actionTypes";

const token = loadData("token") || null;

const initState = {
  isAuth: token !== null,
  token: token
};

function reducer(state = initState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    default:
      return state;
  }
}

export default reducer;

// 1. true
// 2. false
// 3. error
// 4. others
