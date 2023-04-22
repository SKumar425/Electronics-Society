import { LOGIN_USER, REGISTER_USER } from "../types";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.payload);
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        isLoggedIn: action.payload.data.success,
      };

    case REGISTER_USER:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
