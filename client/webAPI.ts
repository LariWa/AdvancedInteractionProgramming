import axios from "axios";

export const getAPI = () => axios.get("https://localhost:8080/api/get/randomMeal", {withCredentials:true })