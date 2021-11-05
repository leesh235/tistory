import { fileserver } from "./axios";
import { apies } from "./routes";

interface Props{
    postId: number,
    writer: string,
    title: string,
    editor: any,
}

export const writePostApi = async(formData: Props) => {
    try{
        const res = await fileserver.post(`${apies.editor}`, formData);
        return res;
    }catch(error){
        throw error;
    }
}

export const getPostApi = async(formData: {
    writer: string,
    postId: number
}) => {
    try{
        const res = await fileserver.get(`${apies.getPost}${formData.writer}/${formData.postId}`);
        return res;
    }catch(error){
        throw error;
    }
}

export const deletePostApi = async(formData: {
    writer: string,
    postId: number
}) => {
    try{
        const res = await fileserver.get(`${apies.delete}${formData.writer}/${formData.postId}`);
        return res;
    }catch(error){
        throw error;
    }
}

export const uploadProfileImgApi = async(formData: {
    email: string,
    streamfile: any
}) => {
    try{
        const res = await fileserver.post(`${apies.profile}`, formData);
        return res;
    }catch(err){
        throw err;
    }
}

export const getProfileImgApi = async(email: string) => {
    try{
        const res = await fileserver.get(`${apies.profileImg}${email}`)
        return res;
    }catch(err){
        throw err;
    }
}

export const unregisterApi = async(email: string) => {
    try{
        const res = await fileserver.get(`${apies.unregister}${email}`)
        return res;
    }catch(err){
        throw err;
    }
}