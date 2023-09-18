import request from "./request";

export const addImgApi = (data: any) =>
    request.post("/addImgUrl", data);

export const findAllImgApi = () =>
    request.get('/findAllImg')

export const deleteImg = (data: any) =>
    request.delete('/imgDelete?imgUrl=' + data)