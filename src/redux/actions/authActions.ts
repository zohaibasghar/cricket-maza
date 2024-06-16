import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";
import { IUserLogin, IUserSignup } from "../../interfaces/User.dto";
import { addError } from "../errorSlice";

export const login = createAsyncThunk(
  "user/login",
  async (data: IUserLogin, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.error }));
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (data: IUserSignup, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.post("/auth/createUser", data);
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.error }));
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const fetchUser = createAsyncThunk(
  "user/fetchuser",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.get("/auth/fetchuser");
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.error }));
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const changePassword = createAsyncThunk(
  "user/change-password",
  async (body: { currentPassword: string; newPassword: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.patch("/auth/change-password", body);
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.error }));
      return rejectWithValue(error.response.data.error);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "user/reset-password",
  async (body: { newPassword: string; email: string }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.patch("/auth/reset-password", body);
      return res;
    } catch (error: any) {
      console.log(error.response.data)
      dispatch(addError({ status: "error", title: error.response.data.error }));
      return rejectWithValue(error.response.data.error);
    }
  },
);
