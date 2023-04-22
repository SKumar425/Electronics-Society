import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        notification: action.payload,
      };

    case CLEAR_MESSAGE:
      return {};

    default:
      return state;
  }
}
