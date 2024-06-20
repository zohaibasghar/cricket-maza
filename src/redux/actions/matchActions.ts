import { createAsyncThunk } from "@reduxjs/toolkit";
import { addError } from "../errorSlice";
import { matchInstance } from "../../config/axios";

export const getAllMatches = createAsyncThunk(
  "matches/getAllMatches",
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const res = await matchInstance.get("/matches");
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.message.message }));
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const getAllSeries = createAsyncThunk(
  "matches/getAllLeagues",
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const res = await matchInstance.get("/series");
      console.log({ res });
      return res;
    } catch (error: any) {
      dispatch(addError({ status: "error", title: error.response.data.message.message }));
      return rejectWithValue(error.response.data.message);
    }
  },
);
