import { announcements, singleAnnouncement } from "../../constants/dummy";
import * as Announcements from "./index";
// import axios from "axios";

export const fetchAnnouncements = (values) => {
  return async (dispatch) => {
    try {
      dispatch(Announcements.fetchAnnouncements(announcements));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSingleAnnouncement = (values) => {
  return async (dispatch) => {
    try {
      console.log("FETCH SINGLE FUNCTION : ", values);
      dispatch(Announcements.fetchSingleAnnouncement(singleAnnouncement));
    } catch (error) {
      console.log(error);
    }
  };
};
