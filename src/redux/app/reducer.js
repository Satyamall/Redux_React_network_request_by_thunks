import { saveData } from "../../utils/localStorage";
import { appConstants } from "./actionTypes";

const initState = {
  todos: [],
  isLoading: true,
  isError: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case appConstants.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case appConstants.GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      };
    }
    case appConstants.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case appConstants.ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case appConstants.ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case appConstants.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case appConstants.REMOVE_TODO_ITEM: {
      // TODO
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case appConstants.TOGGLE_TODO_STATUS: {
      // TODO
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
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
