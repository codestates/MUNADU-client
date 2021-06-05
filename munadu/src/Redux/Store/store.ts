import rootReducer from "../Reducers/rootReducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "persist/PERSIST",
        "replyReducer/getReplyList/fulfilled",
        "avgReducer/getAverage/fulfilled",
        "reviewReducer/getReviewList/fulfilled",
        "recommendReducer/getMartialRank/fulfilled",
        "recommendReducer/getChannel/fulfilled",
        "recommendReducer/getCommentRank/fulfilled",
        "recommendReducer/getReviewRank/fulfilled",
        "reviewReducer/getUserReviewList/fulfilled",
        "commentReducer/getCommentList/fulfilled",
        "userReducer/setUser/fulfilled",
        "authReducer/setAuth/fulfilled",
      ],
    },
  }),
  logger,
];
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export default { store, persistor };
