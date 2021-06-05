import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dummy from "../userDummy.json";
import axios from "axios";

export const setUser = createAsyncThunk(
  "userReducer/setUser",
  async (id: number) => {
    try {
      return await axios.get(
        `${process.env.REACT_APP_API_URL}/user/info/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`e`, e);
    }
  }
);
interface Iimg {
  form: any;
  token: string;
}
interface Iprofile {
  name?: string;
  address?: string | null | undefined;
  token: string;
}

export const setImg = createAsyncThunk(
  "userReducer/setImg",
  async ({ form, token }: Iimg) => {
    try {
      return await axios.put(
        `${process.env.REACT_APP_API_URL}/user/editimg`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`err`, e);
    }
  }
);

export const setProfile = createAsyncThunk(
  "userReducer/setProfile",
  async ({ name, address, token }: Iprofile) => {
    try {
      return await axios.put(
        `${process.env.REACT_APP_API_URL}/user/edit`,
        {
          name,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`err`, e);
    }
  }
);

interface Ipassword {
  password: string;
  afterpassword: string;
  token: string;
}

export const setPassword = createAsyncThunk(
  "userReducer/setPassword",
  async ({ password, afterpassword, token }: Ipassword) => {
    try {
      return await axios.put(
        `${process.env.REACT_APP_API_URL}/user/editpassword`,
        {
          password,
          afterpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`err`, e);
    }
  }
);

export interface Istate {
  id: number;
  email: string;
  name: string;
  address?: string | null;
  img?: string;
  err: string;
}

interface Iuser {
  payload: {
    data: {
      data: {
        id: number;
        name: string;
        email: string;
        img: string;
        address: string | null;
      };
      message: string;
    };
  };
}

interface Ieditimg {
  payload: {
    data: {
      data: {
        path: string;
      };
      message: string;
    };
  };
}

interface IeditProfile {
  payload: {
    data: {
      data: {
        name: string;
        address: string;
      };
      message: string;
    };
  };
}

interface ieditpassword {
  payload: {
    data: {
      message: string;
    };
  };
}

const userReducer = createSlice({
  name: "userReducer",
  initialState: dummy as Istate,
  reducers: {},
  extraReducers: {
    [setUser.fulfilled.type]: (state, action: Iuser) => {
      state.id = action.payload.data.data.id;
      state.email = action.payload.data.data.email;
      state.name = action.payload.data.data.name;
      state.address = action.payload.data.data.address;
      state.img = action.payload.data.data.img;
    },
    [setImg.fulfilled.type]: (state, action: Ieditimg) => {
      state.img = action.payload.data.data.path;
    },
    [setProfile.fulfilled.type]: (state, action: IeditProfile) => {
      state.name = action.payload.data.data.name;
      state.address = action.payload.data.data.address;
    },
    [setPassword.fulfilled.type]: (state, action: ieditpassword) => {
      if (action.payload.data.message !== "uploadData") {
        state.err = "변경 실패 비밀 번호를 다시 설정해주세요";
      } else {
        state.err = "비밀 번호가 변경되었습니다. 다시 로그인해주세요";
      }
    },
  },
});

export default userReducer.reducer;
