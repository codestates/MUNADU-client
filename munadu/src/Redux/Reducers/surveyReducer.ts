import dummy from "../surveyDummy.json";
import { createSlice } from "@reduxjs/toolkit";

interface Imartial {
  name: string;
  weapon: number;
  uniform: number;
  origin: number;
  sports: number;
  manner: number;
  attack: number;
  nation: string;
  caption: string;
  video: string;
  kcal: number;
  img: string;
  wiki: string;
}

interface Istate {
  weapon0?: string;
  uniform1?: string;
  origin2?: string;
  sports3?: string;
  manner4?: string;
  attack5?: string;
  result?: Imartial[];
  isShow?: boolean;
  index?: number;
}

interface Ipayload {
  payload: {
    weapon0?: string;
    uniform1?: string;
    origin2?: string;
    sports3?: string;
    manner4?: string;
    attack5?: string;
    result?: Imartial[];
    isShow?: boolean;
    index?: number;
  };
}

const surveyReducer = createSlice({
  name: "surveyReducer",
  initialState: dummy as Istate,
  reducers: {
    saveAnswer(state, action: Ipayload) {
      state.weapon0 = action.payload.weapon0;
      state.uniform1 = action.payload.uniform1;
      state.origin2 = action.payload.origin2;
      state.sports3 = action.payload.sports3;
      state.manner4 = action.payload.manner4;
      state.attack5 = action.payload.attack5;
      state.result = action.payload.result;
      state.isShow = action.payload.isShow;
      state.index = action.payload.index;
    },
    refreshAnswer(state) {
      state.weapon0 = "";
      state.uniform1 = "";
      state.origin2 = "";
      state.sports3 = "";
      state.manner4 = "";
      state.attack5 = "";
      state.result = [];
      state.isShow = false;
      state.index = 0;
    },
  },
});

export const { saveAnswer, refreshAnswer } = surveyReducer.actions;
export default surveyReducer.reducer;
