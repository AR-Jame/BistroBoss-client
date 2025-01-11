import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_baseURL,
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;