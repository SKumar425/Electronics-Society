import { FETCH_ANNOUNCEMENTS, FETCH_SINGLE_ANNOUNCEMENT } from "../types";

export default function fetchAnnouncements(state = {}, action) {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS:
      return { ...state, data: action.payload };
    case FETCH_SINGLE_ANNOUNCEMENT:
      return { ...state, single_announcement: action.payload };
    default:
      return state;
  }
}
