import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const auditWebsite = async (url) => {
    const response = await api.post("/audit", {
        url,
    });

    return response.data;
};