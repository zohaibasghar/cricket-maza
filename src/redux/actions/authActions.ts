import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import { IUserLogin, IUserSignup } from "../../interfaces/User.dto";

export const login = createAsyncThunk("user/login", async (data: IUserLogin) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res;
});

export const registerUser = createAsyncThunk("user/register", async (data: IUserSignup) => {
  const res = await axiosInstance.post("/auth/createUser", data);
  return res;
});

export const fetchUser = createAsyncThunk("user/fetchuser", async () => {
  const res = await axiosInstance.get("/auth/fetchuser");
  return res;
});
