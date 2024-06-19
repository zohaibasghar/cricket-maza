import { createSlice } from "@reduxjs/toolkit";
import { getAllMatches } from "./actions/matchActions";
import { CDMatchDTO } from "../interfaces/Matches.dto";

interface State {
  leagueLoading: boolean;
  leagueError: string | undefined;
  matches: CDMatchDTO[];
}
const initialState: State = {
  leagueLoading: false,
  leagueError: "",
  matches: [],
};

export const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllMatches.pending, (state) => {
        state.leagueLoading = true;
      })
      .addCase(getAllMatches.rejected, (state, action) => {
        state.leagueLoading = false;
        state.leagueError = action.error.message;
      })
      .addCase(getAllMatches.fulfilled, (state, payload) => {
        state.leagueLoading = false;
        state.matches = payload.payload.data.data;
      });
  },
});

export const matchReducer = matchSlice.reducer;
