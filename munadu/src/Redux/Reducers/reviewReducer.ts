import dummy from "../reviewDummy.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewList = createAsyncThunk(
  "reviewReducer/getReviewList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/review/martial-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

export const getUserReviewList = createAsyncThunk(
  "reviewReducer/getUserReviewList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/review/user-list/${id}`,
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
  period: number;
  comment: string;
  score: number;
  practicality: number;
  muscle: number;
  difficulty: number;
  intensity: number;
  injury: number;
  Martials_id: number;
  Users_id: number;
  accessToken: string;
}
export const createReview = createAsyncThunk(
  "reviewReducer/createReview",
  async ({
    period,
    comment,
    score,
    practicality,
    muscle,
    difficulty,
    intensity,
    injury,
    Martials_id,
    Users_id,
    accessToken,
  }: CreateProps) => {
    const resp = await axios.post(
      `${process.env.REACT_APP_API_URL}/review/create`,
      {
        period,
        comment,
        score,
        practicality,
        muscle,
        difficulty,
        intensity,
        injury,
        Martials_id,
        Users_id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(`resp in createReview!!!!!:`, resp);
    return {
      ...resp.data.data,
      period,
      comment,
      score,
      practicality,
      muscle,
      difficulty,
      intensity,
      injury,
      Martials_id,
      Users_id,
    };
  }
);
interface UpdateProps {
  period: number;
  comment: string;
  score: number;
  practicality: number;
  muscle: number;
  difficulty: number;
  intensity: number;
  injury: number;
  reviewId: number;
  accessToken: string;
}
export const updateReviews = createAsyncThunk(
  "reviewReducer/updateReviews",
  async ({
    period,
    comment,
    score,
    practicality,
    muscle,
    difficulty,
    intensity,
    injury,
    reviewId,
    accessToken,
  }: UpdateProps) => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/review/update`,
      {
        period,
        comment,
        score,
        practicality,
        muscle,
        difficulty,
        intensity,
        injury,
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

    return {
      period,
      comment,
      score,
      practicality,
      muscle,
      difficulty,
      intensity,
      injury,
      reviewId,
    };
  }
);

interface IReview {
  id: number;
  period: number;
  comment: string;
  score: number;
  practicality: number;
  muscle: number;
  difficulty: number;
  intensity: number;
  injury: number;
  Martials_id: number;
  Users_id: number;
  createdAt: string;
  updatedAt: string;
  users: { name: string; img: string };
  accessToken?: string;
}
interface IState {
  reviewList: IReview[];
  userReviewList: IReview[];
}

interface Ipayload {
  payload: {
    data: { data: IReview[]; message: string };
  };
}

interface IcreatePayload {
  payload: {
    Reviews_id: number;
    createdAt: string;
    updatedAt: string;
    users: { name: string; img: string };
    period: number;
    comment: string;
    score: number;
    practicality: number;
    muscle: number;
    difficulty: number;
    intensity: number;
    injury: number;
    Martials_id: number;
    Users_id: number;
  };
}
interface IupdatePayload {
  payload: {
    period: number;
    comment: string;
    score: number;
    practicality: number;
    muscle: number;
    difficulty: number;
    intensity: number;
    injury: number;
    reviewId: number;
  };
}

interface deleteProps {
  reviewId: number;
  accessToken: string;
}

export const deleteReview = createAsyncThunk(
  "reviewReducer/deleteReview",
  async ({ reviewId, accessToken }: deleteProps) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/review/delete`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        reviewId: reviewId,
      },
    });
    return { reviewId };
  }
);

const reviewReducer = createSlice({
  name: "reviewReducer",
  initialState: dummy as IState,
  reducers: {},
  extraReducers: {
    [getReviewList.fulfilled.type]: (state, action: Ipayload) => {
      state.reviewList = action.payload.data.data;
    },
    [getUserReviewList.fulfilled.type]: (state, action: Ipayload) => {
      state.userReviewList = action.payload.data.data;
    },
    [createReview.fulfilled.type]: (state, action: IcreatePayload) => {
      console.log(`action in createReview`, action);
      state.reviewList.push({
        id: action.payload.Reviews_id,
        period: action.payload.period,
        comment: action.payload.comment,
        score: action.payload.score,
        practicality: action.payload.practicality,
        muscle: action.payload.muscle,
        difficulty: action.payload.difficulty,
        intensity: action.payload.intensity,
        injury: action.payload.injury,
        Martials_id: action.payload.Martials_id,
        Users_id: action.payload.Users_id,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
        users: {
          name: action.payload.users.name,
          img: action.payload.users.img,
        },
      });
    },
    [updateReviews.fulfilled.type]: (state, action: IupdatePayload) => {
      const index = state.reviewList.findIndex(
        (review) => review.id === action.payload.reviewId
      );
      state.reviewList[index].period = action.payload.period;
      state.reviewList[index].comment = action.payload.comment;
      state.reviewList[index].score = action.payload.score;
      state.reviewList[index].practicality = action.payload.practicality;
      state.reviewList[index].muscle = action.payload.muscle;
      state.reviewList[index].difficulty = action.payload.difficulty;
      state.reviewList[index].intensity = action.payload.intensity;
      state.reviewList[index].injury = action.payload.injury;
    },
    [deleteReview.fulfilled.type]: (state, action) => {
      state.reviewList = state.reviewList.filter(
        (review) => review.id !== action.payload.reviewId
      );
    },
  },
});

export default reviewReducer.reducer;
