import { FETCH_PROBLEMS } from "../types/problem_types";

export default function fetchProblems(state = {}, action) {
  switch (action.type) {
    case FETCH_PROBLEMS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
