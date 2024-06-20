import { createSlice } from "@reduxjs/toolkit";
import { getAllMatches, getAllSeries } from "./actions/matchActions";
import { CDMatchDTO, SeriesDTO } from "../interfaces/Matches.dto";

interface State {
  leagueLoading: boolean;
  leagueError: string | undefined;
  matches: CDMatchDTO[];
  series: SeriesDTO[];
}
const initialState: State = {
  leagueLoading: false,
  leagueError: "",
  matches: [],
  series: [],
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
      })
      .addCase(getAllSeries.pending, (state) => {
        state.leagueLoading = true;
      })
      .addCase(getAllSeries.rejected, (state, action) => {
        state.leagueLoading = false;
        state.leagueError = action.error.message;
      })
      .addCase(getAllSeries.fulfilled, (state, payload) => {
        state.leagueLoading = false;
        state.series = payload.payload.data.data;
      });
  },
});

export const matchReducer = matchSlice.reducer;
