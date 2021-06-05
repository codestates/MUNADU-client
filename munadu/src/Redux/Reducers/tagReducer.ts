import dummy from "../tagDummy.json";
import { createSlice } from "@reduxjs/toolkit";

interface Istate {
  isHand: boolean;
  isWeapon: boolean;
  isHandAndWeapon: boolean;
  isDobok: boolean;
  isFreebok: boolean;
  isUniform: boolean;
  isAttack: boolean;
  isGround: boolean;
  isMMA: boolean;
  isEastern: boolean;
  isWestern: boolean;
  isSports: boolean;
  isNoSports: boolean;
  isCourtesy: boolean;
  isFreedom: boolean;
}

interface Ipayload {
  payload: {
    isHand: boolean;
    isWeapon: boolean;
    isHandAndWeapon: boolean;
    isDobok: boolean;
    isFreebok: boolean;
    isUniform: boolean;
    isAttack: boolean;
    isGround: boolean;
    isMMA: boolean;
    isEastern: boolean;
    isWestern: boolean;
    isSports: boolean;
    isNoSports: boolean;
    isCourtesy: boolean;
    isFreedom: boolean;
  };
}

const tagReducer = createSlice({
  name: "tagReducer",
  initialState: dummy as Istate,
  reducers: {
    selectTag(state, action: Ipayload) {
      state.isHand = action.payload.isHand;
      state.isWeapon = action.payload.isWeapon;
      state.isHandAndWeapon = action.payload.isHandAndWeapon;
      state.isDobok = action.payload.isDobok;
      state.isFreebok = action.payload.isFreebok;
      state.isUniform = action.payload.isUniform;
      state.isAttack = action.payload.isAttack;
      state.isGround = action.payload.isGround;
      state.isMMA = action.payload.isMMA;
      state.isEastern = action.payload.isEastern;
      state.isWestern = action.payload.isWestern;
      state.isSports = action.payload.isSports;
      state.isNoSports = action.payload.isNoSports;
      state.isCourtesy = action.payload.isCourtesy;
      state.isFreedom = action.payload.isFreedom;
    },
  },
});

export const { selectTag } = tagReducer.actions;
export default tagReducer.reducer;
