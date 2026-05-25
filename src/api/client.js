import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10_000,
});

apiClient.interceptors.response.use(
    (res) => res.data,
    (err) => {
        const msg =
            err.response?.data?.error ?? err.message ?? "Network error";
        return Promise.reject(new Error(msg));
    }
);
