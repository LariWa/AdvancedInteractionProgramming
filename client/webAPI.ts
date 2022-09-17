import axios from "axios";

export const getAPI = () =>
  axios.post(
    "https://localhost:8080/api/post/mealDetails",
    { id: 52772 },
    {
      withCredentials: true,
    }
  );

//export const getAPI = () => axios.post("https://localhost:8080/api/post/filterMeals", {c: "Seafood", a:"Canadian", i:"Salmon"}, {withCredentials:true})
