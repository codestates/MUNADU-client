import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAverage = createAsyncThunk(
  "avgReducer/getAverage",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/review/average/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);
interface IReview {
  Martials_id: number;
  scoreAvg: number;
}

interface Ipayload {
  payload: {
    data: { data: IReview[]; message: string };
  };
}

const initialState = {
  Martials_id: 0,
  scoreAvg: 0,
};

const avgReducer = createSlice({
  name: "avgReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAverage.fulfilled.type]: (state, action: Ipayload) => {
      state.Martials_id = action.payload.data.data[0].Martials_id;
      state.scoreAvg = action.payload.data.data[0].scoreAvg;
    },
  },
});

export default avgReducer.reducer;
