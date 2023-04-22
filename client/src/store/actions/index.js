import {
  // announcement
  FETCH_ANNOUNCEMENTS,
  FETCH_SINGLE_ANNOUNCEMENT,
  // problem
  FETCH_PROBLEMS,
  // auth
  LOGIN_USER,
  REGISTER_USER,
  // message
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../types";

export const fetchAnnouncements = (announcements) => {
  return {
    type: FETCH_ANNOUNCEMENTS,
    payload: announcements,
  };
};

export const fetchSingleAnnouncement = (singleAnnouncement) => {
  return {
    type: FETCH_SINGLE_ANNOUNCEMENT,
    payload: singleAnnouncement,
  };
};

export const fetchProblems = (problems) => {
  return {
    type: FETCH_PROBLEMS,
    payload: problems,
  };
};

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: user,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};
