import axios from "axios";
import { getToken } from "./utiles";

const baseURL = process.env.REACT_APP_FILESERVER;

export const fileserver = axios.create({
    baseURL,
    headers: {
        Authorization: `${getToken()}`,
        // "Content-Type": "multipart/form-data"
    }
})