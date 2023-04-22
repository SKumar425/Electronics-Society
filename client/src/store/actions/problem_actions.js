import { posts } from "../../constants/dummy";
import * as Problems from "./index";

export const fetchProblems = (values) => {
  return async (dispatch) => {
    try {
      dispatch(Problems.fetchProblems(posts));
    } catch {}
  };
};
