import axios from "axios";
import { loginProp, registerProp } from "../type/type";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const register = async (option: registerProp) => {
  const response = await axios.post(`${BASE_URL}/register`, option);
  return response;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (option: registerProp) => register(option),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

const login = async (option: loginProp) => {
  const response = await axios.post(`${BASE_URL}/login`, option);
  return response;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (option: loginProp) => login(option),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
