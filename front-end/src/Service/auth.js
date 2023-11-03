import axios from "axios";
// const Auth = "http://localhost:8080/auth";
// const secureRoutes = "http://localhost:8080/secure";

const Auth = "https://backend12-dy8f.onrender.com/auth";
const secureRoutes = "https://backend12-dy8f.onrender.com/secure";

export const registerHandler = async (userData) => {
    try {
      const response = await axios.post(`${Auth}/register`, userData);
      return response
    } catch (error) {
      console.error(error);
    }
  };


  export const loginHandler = async (userData) => {
    try {
      const response = await axios.post(`${Auth}/login`, userData);
      return response
    } catch (error) {
        console.error(error);
    }
  };


  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the token in the request headers
    },
  };

  export const Authenticated = async() => {
        try{
            const response = await axios.get(`${secureRoutes}/secure-data`, config)
            return response;
        }catch(error){
            console.log('checking auth error', error)
            return error;
        }
  }