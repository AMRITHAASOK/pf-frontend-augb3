//All API calls 

import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//1 Register api call
export const registerAPI = async(user) =>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}


// 2 login api call
export const loginAPI = async(user) =>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

// 3 Add project api call
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${baseUrl}/project/add`,reqBody,reqHeader)
}