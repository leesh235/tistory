import { fileserver } from "./axios";
import { apies } from "./routes";

interface Props{
    postId: number,
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

export const getPostApi = async(api: string) => {
    try{
        const res = await fileserver.get(`${api}`);
        return res;
    }catch(error){
        throw error;
    }
}

export const deletePostApi = async(formData: {
    postId: number
}) => {
    try{
        const res = await fileserver.post(`${apies.delete}`, formData);
        return res;
    }catch(error){
        throw error;
    }
}

export const uploadProfileImgApi = async(formData: any) => {
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