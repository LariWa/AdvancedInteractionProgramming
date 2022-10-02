import axios from "axios";
// export const getAPI = () =>
//   axios.post(
//     "https://localhost:8080/api/post/mealDetails",
//     { id: 52772 },
//     {
//       withCredentials: true,
//     }
//   );
const getAPI = () =>
  axios.post(
    "https://localhost:8080/user/login",
    {
      username: "lari",
      password: "test",
    },
    { withCredentials: true }
  );
function getData(token: string) {
  axios.get("https://localhost:8080/db/", {
    headers: { authorization: "bearer " + token },
  });
}
export { getAPI, getData };
