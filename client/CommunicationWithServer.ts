import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080/";

// function getData(token: string) {
//   axios.get("https://localhost:8080/db/", {
//     headers: { authorization: "bearer " + token },
//   });

function login(username: string, password: string) {
  return axios.post("/user/login", {
    username: username,
    password: password,
  });
}
function signup(username: string, password: string) {
  return axios.post("/user/login", {
    username: username,
    password: password,
  });
}
export { login, signup };
