import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "../utils/uuid";

export interface IError {
  id?: string;
  status: "error" | "success" | "warning" | "info";
  title: string;
}

const initialState: { errors: IError[] } = {
  errors: [],
};

export const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<IError>) => {
      const id = uuid();
      const newError: IError = { ...action.payload, id };
      state.errors.push(newError);
    },
    removeError: (state, action: PayloadAction<{ id: string }>) => {
      state.errors = state.errors.filter((e) => {
        return e.id !== action.payload.id;
      });
    },
  },
});

const errorsReducer = errorsSlice.reducer;

export const { addError, removeError } = errorsSlice.actions;

export default errorsReducer;
