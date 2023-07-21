import { axiosInstance } from "./axios"

export const findAll=async(entity:string):Promise<any>=>{
    const res=await axiosInstance.get(`/${entity}`);
    return res
}

export const findOne=async(entity:string,id:string):Promise<any>=>{
    const res=await axiosInstance.get(`/${entity}/${id}`);
    return res
}

export const deleteEntity=async(entity:string,id:string):Promise<any>=>{
    return await axiosInstance.delete(`/${entity}/${id}`);
    
}
export const create=async(entity:string,data:any):Promise<any>=>{
    return await axiosInstance.post(`/${entity}`,data);
    
}
export const update=async(entity:string,data:any,id:string):Promise<any>=>{
    return await axiosInstance.patch(`/${entity}/${id}`,data);
    
}
