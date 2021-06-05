import dummy from "../replyDummy.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReplyList = createAsyncThunk(
  "replyReducer/getReplyList",
  async () => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/reply/all-reply-list`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

interface CreateProps {
  comment: string;
  userId: number;
  reviewId: number;
  accessToken: string;
}
export const createReply = createAsyncThunk(
  "replyReducer/createReply",
  async ({ comment, userId, reviewId, accessToken }: CreateProps) => {
    const resp = await axios.post(
      `${process.env.REACT_APP_API_URL}/reply/create`,
      {
        comment,
        userId,
        reviewId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return resp;
  }
);
interface UpdateProps {
  replyId: number;
  comment: string;
  accessToken: string;
}
export const updateReply = createAsyncThunk(
  "replyReducer/updateReply",
  async ({ replyId, comment, accessToken }: UpdateProps) => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/reply/update`,
      {
        replyId,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return {
      replyId,
      comment,
    };
  }
);

interface IReply {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  Users_id: number;
  Reviews_id: number;
  users: { name: string; img: string };
  accessToken?: string;
}
interface IState {
  replyList: IReply[];
}

interface Ipayload {
  payload: {
    data: { data: IReply[]; message: string };
  };
}

interface IcreatePayload {
  payload: {
    data: {
      data: {
        id: number;
        comment: string;
        Users_id: number;
        Reviews_id: number;
        updatedAt: string;
        createdAt: string;
        users: { name: string; img: string };
      };
    };
  };
}
interface IupdatePayload {
  payload: {
    comment: string;
    replyId: number;
  };
}

interface deleteProps {
  replyId: number;
  accessToken: string;
}

export const deleteReply = createAsyncThunk(
  "reviewReducer/deleteReply",
  async ({ replyId, accessToken }: deleteProps) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/reply/delete`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        replyId: replyId,
      },
    });
    return { replyId };
  }
);

const replyReducer = createSlice({
  name: "replyReducer",
  initialState: dummy as IState,
  reducers: {},
  extraReducers: {
    [getReplyList.fulfilled.type]: (state, action: Ipayload) => {
      state.replyList = action.payload.data.data;
    },
    [createReply.fulfilled.type]: (state, action: IcreatePayload) => {
      console.log(`action in createReply`, action);
      state.replyList.unshift({
        id: action.payload.data.data.id,
        comment: action.payload.data.data.comment,
        Reviews_id: action.payload.data.data.Reviews_id,
        Users_id: action.payload.data.data.Users_id,
        createdAt: action.payload.data.data.createdAt,
        updatedAt: action.payload.data.data.updatedAt,
        users: action.payload.data.data.users,
      });
    },
    [updateReply.fulfilled.type]: (state, action: IupdatePayload) => {
      const index = state.replyList.findIndex(
        (reply) => reply.id === action.payload.replyId
      );
      state.replyList[index].comment = action.payload.comment;
    },
    [deleteReply.fulfilled.type]: (state, action) => {
      state.replyList = state.replyList.filter(
        (reply) => reply.id !== action.payload.replyId
      );
    },
  },
});

export default replyReducer.reducer;
