import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentList = createAsyncThunk(
  "commentReducer/getCommentList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/comment/martial-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

export const getUserComment = createAsyncThunk(
  "commentReducer/getUserComment",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/comment/user-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

export const getUserReply = createAsyncThunk(
  "commentReducer/getUserReply",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/reply/user-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

interface ICreateProps {
  comment: string;
  userid: number;
  martialid: number;
  accessToken: string;
}
export const createComment = createAsyncThunk(
  "commentReducer/createComment",
  async ({ comment, userid, martialid, accessToken }: ICreateProps) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/comment/create`,
      {
        comment,
        userid,
        martialid,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.data.data;
  }
);
interface IDeleteProps {
  accessToken: string;
  commentid: number;
}

export const deleteComment = createAsyncThunk(
  "commentReducer/deleteComment",
  async ({ accessToken, commentid }: IDeleteProps) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/comment/delete`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        commentid,
      },
    });
    return { commentid };
  }
);

interface IUpdateProps {
  accessToken: string;
  commentid: number;
  comment: string;
  curComment: string;
}

export const updateComment = createAsyncThunk(
  "commentReducer/updateComment",
  async ({ accessToken, commentid, comment, curComment }: IUpdateProps) => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/comment/update`,
      {
        commentid,
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
    return { commentid, curComment };
  }
);

interface IComment {
  id: number;
  comment: string;
  Users_id: number;
  Martials_id: number;
  createdAt: string;
  updatedAt: string;
  users: { name: string; img: string };
}

const initialState = {
  data: {
    commentList: [] as IComment[],
  },
};
const commentReducer = createSlice({
  name: "commentReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled.type]: (state, action) => {
      state.data.commentList = action.payload.data.data;
    },
    [createComment.fulfilled.type]: (state, action) => {
      state.data.commentList.unshift(action.payload);
    },
    [deleteComment.fulfilled.type]: (state, action) => {
      state.data.commentList = state.data.commentList.filter(
        (comment) => comment.id !== action.payload.commentid
      );
    },
    [updateComment.fulfilled.type]: (state, action) => {
      const index = state.data.commentList.findIndex((comment) => {
        return comment.id === action.payload.commentid;
      });
      state.data.commentList[index].comment = action.payload.curComment;
    },
    [getUserComment.fulfilled.type]: (state, action) => {
      state.data.commentList = action.payload.data.data;
    },
    [getUserReply.fulfilled.type]: (state, action) => {
      state.data.commentList = action.payload.data.data;
    },
  },
});

export default commentReducer.reducer;
