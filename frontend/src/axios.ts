import axios from "axios";
import { getToken } from "./utils/auth";

const baseURL = `${process.env.REACT_APP_FILESERVER}`;

export const fileserver = axios.create({
    baseURL,
    headers: {
        Authorization: `${getToken()}`,
        // "Content-Type": "multipart/form-data"
    }
})