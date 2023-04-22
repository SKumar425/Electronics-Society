import * as auth from "./index";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
      const user = await axios.post("/api/v1/auth/register", {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
        profession: values.profession,
      });
      dispatch(auth.loginUser({ response: user.data }));
      dispatch(auth.setMessage({ message: "User created successfully" }));
    } catch (err) {
      dispatch();
    }
  };
};
