import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = async (email:string,password:string)=>{
    return axios.post(API_URL + "/login",{
        email,
        password,
    }).then((response)=>{
        return response;
    });
}
export const registration = async (firstName:string,lastName:string,email:string,password:string,phoneNumber:string,role:string,confirmPassword:string)=>{
    return axios.post(API_URL + "/signup",{
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        role,
        confirmPassword,
    }).then((response)=>{
        return response;
    });
}
export const updateUser  = async (firstName:string,lastName:string,email:string,phoneNumber:string)=>{
    return axios.put(API_URL + "/updateUser",{
        firstName,
        lastName,
        email,
        phoneNumber,
    }).then((response)=>{
        return response;
    });
}
