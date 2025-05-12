import api from "./api";

export const postAuth = async (loginData) => {
  const { username, password, rememberMe } = loginData;

  const response = await api.post("/authenticate", {
    username,
    password,
    rememberMe,
  });

  return response.data; // Return the response data so we can access the token
};
