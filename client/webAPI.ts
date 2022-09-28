import axios from "axios";

export const getAPI = () => axios.get("https://localhost:8080/api/get", {withCredentials:true }).then(({data}:{data: {someData:string}}) =>data.someData)