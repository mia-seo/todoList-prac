import { Form } from "../components/Auth";
import { instance } from "./index";

type SigninResponse = {
  access_token: string;
};

export const signup = async (data: Form) => {
  const response = await instance.post("/auth/signup", data);
  return response.status;
};

export const signin = async (data: Form): Promise<SigninResponse> => {
  const response = await instance.post("/auth/signin", data);
  return response.data;
};
