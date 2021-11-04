import axios from "axios";
import { getToken } from "./utiles";

export const fileserver = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        Authorization: `${getToken()}`,
        "Content-Type": "multipart/form-data"
    }
})