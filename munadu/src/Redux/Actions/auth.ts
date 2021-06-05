export const SET_NO_AUTH = "SET_NO_AUTH";

export const SET_AUTH = "SET_AUTH";

export const setAuth = (accessToken: string) => {
  return {
    type: SET_AUTH,
    payload: {
      accessToken,
    },
  };
};

export const setNoAuth = () => {
  return {
    type: SET_NO_AUTH,
    payload: {},
  };
};
