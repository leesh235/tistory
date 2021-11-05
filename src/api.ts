import { fileserver } from "./axios";
import { apies } from "./routes";

export const writePostApi = (formData: {
    postId: number,
    writer: string,
    title: string,
    editor: any,
}) => {
    try{
        const res = fileserver.post(`${apies.editor}`, formData);
        return res;
    }catch(error){
        throw error;
    }
}

export const getPostApi = (formData: {
    writer: string,
    postId: number
}) => {
    try{
        const res = fileserver.get(`${apies.getPost}${formData.writer}/${formData.postId}`);
        return res;
    }catch(error){
        throw error;
    }
}

export const deletePostApi = (formData: {
    writer: string,
    postId: number
}) => {
    try{
        const res = fileserver.get(`${apies.delete}${formData.writer}/${formData.postId}`);
        return res;
    }catch(error){
        throw error;
    }
}

export const uploadProfileImgApi = (formData: {
    email: string,
    streamfile: any
}) => {
    try{
        const res = fileserver.post(`${apies.profile}`, formData);
        return res;
    }catch(err){
        throw err;
    }
}

export const getProfileImgApi = (email: string) => {
    try{
        const res = fileserver.get(`${apies.profileImg}${email}`)
        return res;
    }catch(err){
        throw err;
    }
}

export const unregisterApi = (email: string) => {
    try{
        const res = fileserver.get(`${apies.unregister}${email}`)
        return res;
    }catch(err){
        throw err;
    }
}