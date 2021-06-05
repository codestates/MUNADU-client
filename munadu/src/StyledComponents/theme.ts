import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: {
    box: "5px",
    tag: "10px",
  },

  width: {
    loginBox: "20%",
    surveyBox: "44%",
    surveyGauge: "90%",
    contentBox: "64%",
    modalBox: "38%",
    media: "1024px",
  },
  height: {
    loginBox: "54%",
    surveyBox: "46%",
    surveyGauge: "4px",
    surveyOptions: "38%",
    modalBox: "94vh",
  },
  fontFamily: {
    mainFont: "Roboto, sans-serif",
    subFont: "Noto Sans KR, sans-serif",
  },
  color: {
    black: "#1C1C1C",
    grey: "#EEEEEE",
    white: "#FFFFFF",
  },
};

export { theme };
