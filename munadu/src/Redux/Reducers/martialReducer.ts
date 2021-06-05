import dummy from "../martialDummy.json";
import { createSlice } from "@reduxjs/toolkit";

interface Imartial {
  id: number;
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
  weapon?: number;
  uniform?: number;
  origin?: number;
  sports?: number;
  manner?: number;
  attack?: number;
  result: Imartial[] | undefined;
}

interface Ipayload {
  payload: {
    weapon?: number;
    uniform?: number;
    origin?: number;
    sports?: number;
    manner?: number;
    attack?: number;
    result: Imartial[];
  };
}

const martialReducer = createSlice({
  name: "martialReducer",
  initialState: dummy as Istate,
  reducers: {
    filterMartial(state, action: Ipayload) {
      state.weapon = action.payload.weapon;
      state.uniform = action.payload.uniform;
      state.origin = action.payload.origin;
      state.sports = action.payload.sports;
      state.manner = action.payload.manner;
      state.attack = action.payload.attack;
      state.result = action.payload.result;
    },
  },
});

export const { filterMartial } = martialReducer.actions;
export default martialReducer.reducer;
