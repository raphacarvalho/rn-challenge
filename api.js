import axios from 'axios';

const create = (baseURL = '') => {
    
    const axiosInstance = axios.create(
        {
            baseURL,
            headers: { 
                "X-Requested-With": "XMLHttpRequest",
            } , 
        }
    );

    return axiosInstance;
}

export default { create };