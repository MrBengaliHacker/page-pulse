import axios from "axios";

const api = axios.create({
    baseURL: "https://page-pulse-v5sh.onrender.com/api",
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