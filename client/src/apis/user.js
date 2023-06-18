import axios from "../axios";

export const apiRegister = async (data) => {
  return axios({
    url: "/user/register",
    method: "POST",
    data,
    withCredentials: true,
  });
};

export const apiLogin = async (data) => {
  return axios({
    url: "/user/login",
    method: "POST",
    data,
  });
};

export const apiForgotPassword = async ({ email }) => {
  return axios({
    url: "/user/forgotpassword",
    method: "POST",
    data: { email },
  });
};