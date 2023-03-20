import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8085",
});

const login = async (username, password) => {
  try {
    const { data } = await client.post("/api/login/", {
      username,
      password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const { data } = await client.post("/api/logout/", {
      withCredentials: true,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const register = async (username, password, email, firstname, lastname) => {
    try {
      const { data } = await client.post("/api/register/", {
        username,
        password,
        email,
        firstname,
        lastname
      });
  
      return data;
    } catch (error) {
      throw error;
    }
  };

  const whoAmi = async () => {
    try {
      const { data } = await client.get("/api/whoami/");
  
      return data;
    } catch (error) {
      throw error;
    }
  };

export { login, logout, register, whoAmi };
