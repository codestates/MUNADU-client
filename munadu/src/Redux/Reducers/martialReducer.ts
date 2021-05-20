import dummy from "../martialDummy.json";
import { SET_MARTIAL } from "../Actions/martial";

const martialReducer = (state: any = dummy, action: any) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default martialReducer;
