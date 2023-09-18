import request from "./request";

export const deleteAndAdd = (data: any) =>
    request.post("/deleteAndAdd", data);

export const findCardlist = () =>
    request.get('/findCardlist')
