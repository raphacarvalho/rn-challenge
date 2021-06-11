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

    axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      }, 
      function (error) {
        if (error.response.status === 401) {            
            window.location.reload();
        }
      return Promise.reject(error);
      }
    );

    return axiosInstance;
}

export default { create };