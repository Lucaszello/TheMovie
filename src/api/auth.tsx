import axios from "axios";
import { registerProp } from "../type/type";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const register = async (option: registerProp) => {
  const response = await axios.post(`${BASE_URL}/register`, option);
  return response;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (option: registerProp) => register(option),
    onError: (err) => {
      console.log(err);
    },
  });
};
