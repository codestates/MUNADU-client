import dummy from "../channelDummy.json";
// import {  } from "../Actions/actions";

const channelReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default channelReducer;
