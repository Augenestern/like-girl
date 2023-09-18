import request from "./request";

interface reqLogin {
    username: string,
    password: string
}

export const loginAPI = (data: reqLogin) =>
    request.post("/login", data);