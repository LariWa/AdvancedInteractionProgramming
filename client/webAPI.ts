import axios from "axios";

// export const getAPI = () =>
//   axios.post(
//     "https://localhost:8080/api/post/mealDetails",
//     { id: 52772 },
//     {
//       withCredentials: true,
//     }
//   );
export const getAPI = () =>
  axios.post(
    "https://localhost:8080/user/login",
    {
      username: "lari",
      password: "test",
    },
    { withCredentials: true }
  );
