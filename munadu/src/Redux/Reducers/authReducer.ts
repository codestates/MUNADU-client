import dummy from "../authDummy.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Istate {
  isLogin: boolean;
  accessToken: string;
  id: number;
  err: string;
  isSocial: boolean;
}
interface IpayLoad {
  payload: {
    data: {
      data: { accessToken: string; id: number };
      message: string;
    };
  };
}
interface Ilogin {
  email: string;
  password: string;
}

interface Isocial {
  token: string;
  type: number;
}

export const setAuth = createAsyncThunk(
  "authReducer/setAuth",
  async ({ email, password }: Ilogin) => {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/user/signin`,
      { email: email, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

export const signInSocial = createAsyncThunk(
  "authReducer/signInSocial",
  async ({ token, type }: Isocial) => {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/user/sociallogin`,
      { token, type },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

const authReducer = createSlice({
  name: "authReducer",
  initialState: dummy as Istate,
  reducers: {
    setNoAuth(state) {
      state.isLogin = false;
      state.accessToken = "";
    },
  },
  extraReducers: {
    [setAuth.pending.type]: (state) => {
      state.isLogin = false;
      state.err = "";
    },
    [setAuth.fulfilled.type]: (state, action: IpayLoad) => {
      state.isLogin = true;
      state.isSocial = false;
      state.id = action.payload.data.data.id;
      state.accessToken = action.payload.data.data.accessToken;
    },
    [setAuth.rejected.type]: (state) => {
      state.isLogin = false;
      state.accessToken = "";
      state.err = "로그인 실패, 다시 입력해주세요";
    },
    [signInSocial.pending.type]: (state) => {
      state.isLogin = false;
      state.err = "";
    },
    [signInSocial.fulfilled.type]: (state, action: IpayLoad) => {
      state.isLogin = true;
      state.isSocial = true;
      state.id = action.payload.data.data.id;
      state.accessToken = action.payload.data.data.accessToken;
    },
    [signInSocial.rejected.type]: (state) => {
      state.isLogin = false;
      state.accessToken = "";
      state.err = "로그인 실패, 다시 입력해주세요";
    },
  },
});

export const { setNoAuth } = authReducer.actions;

export default authReducer.reducer;
