import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export const httpRequest = axios.create({
    baseURL: baseURL
});
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};