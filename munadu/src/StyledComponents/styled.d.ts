import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      box: string;
      tag: string;
    };

    width: {
      loginBox: string;
      surveyBox: string;
      surveyGauge: string;
      contentBox: string;
      modalBox: string;
      media: string;
    };
    height: {
      loginBox: string;
      surveyBox: string;
      surveyGauge: string;
      surveyOptions: string;
      modalBox: string;
    };
    fontFamily: {
      mainFont: string;
      subFont: string;
    };
    color: {
      black: string;
      grey: string;
      white: string;
    };
  }
}
