import axios from "axios";

axios.defaults.baseURL = "https://mealappserver.onrender.com";

function login(username: string, password: string) {
  return axios.post("/user/login", {
    username: username,
    password: password,
  });
}
function signup(username: string, password: string) {
  return axios.post("/user/signup", {
    username: username,
    password: password,
  });
}
export { login, signup };
