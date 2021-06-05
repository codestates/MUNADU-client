import styled from "styled-components";
export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.white};

  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 7%;
`;

export const TotalCount = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  border-bottom: 1px solid #eeeeee; ;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 27em;
  border-bottom: 5px solid #eeeeee;
  padding-bottom: 15px;
`;

export const NameAndDateAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NameAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1% 0;
`;

export const RatingsAndDesc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    flex-direction: column;
  }
`;

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: auto;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding: 0 5%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    padding: 0;
    width: 100%;
    margin-top: 25px;
  }
`;

export const Photo2 = styled.img`
  width: 15%;
  height: auto;
  margin-right: 10%;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #1c1c1c;
  min-width: 7em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    min-width: 5em;
  }
`;
export const Name4 = styled(Name)`
  line-height: 140%;
`;
export const Date = styled.div`
  min-width: 7em;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
  margin-left: 5%;
`;
interface IStar {
  idx: number;
  score: number;
}
export const StarPhoto = styled.img<IStar>`
  width: 20%;
  height: auto;
  margin-right: 2%;
  filter: ${(props) => {
    if (props.idx > props.score) return "grayscale(100%)";
  }};
`;
export const StarWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 70%;
    height: auto;
  }
`;
export const NameAndBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 15%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 100%;
    margin-top: 0;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: flex-start;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    min-width: 20%;
    /* margin-top: 10px; */
  }
`;
interface Ibar {
  idx: number;
  practicality: number;
}
export const BarPhoto = styled.img<Ibar>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.practicality) return "opacity(25%)";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    z-index: 0;
    position: relative;
    width: 15%;
  }
`;
interface Ibar2 {
  idx: number;
  muscle: number;
}
export const BarPhoto2 = styled.img<Ibar2>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.muscle) return "opacity(25%)";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 15%;
  }
`;
interface Ibar3 {
  idx: number;
  difficulty: number;
}
export const BarPhoto3 = styled.img<Ibar3>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.difficulty) return "opacity(25%)";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 15%;
  }
`;
interface Ibar4 {
  idx: number;
  intensity: number;
}
export const BarPhoto4 = styled.img<Ibar4>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.intensity) return "opacity(25%)";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 15%;
  }
`;
interface Ibar5 {
  idx: number;
  injury: number;
}
export const BarPhoto5 = styled.img<Ibar5>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.injury) return "opacity(25%)";
  }};
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 15%;
  }
`;

export const Name2 = styled(Name)`
  font-weight: 700;
  margin-bottom: 3%;
`;

export const Name3 = styled(Name2)`
  margin-top: 3%;
`;
export const Photo3 = styled.img`
  width: 7%;
  height: auto;
  cursor: pointer;
  position: relative;
  /* margin-right: 3%; */
`;
export const LayerBtn = styled.div`
  display: flex;
  align-items: center;
  width: 4em;
  height: 1em;
  margin-right: 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const ReplyBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #eeeeee;
  padding-top: 1em;
`;

export const ReplyDescBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.3em 0.7em 1.3em;
`;

export const NickName = styled.div`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 700;
`;
export const ReplyTitle = styled(NickName)`
  font-size: 1.2rem;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const ReplyText = styled.p`
  width: 100%;
`;
export const ReplyDateAndAgain = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: #979797;
`;

export const Photo4 = styled.img`
  width: 3em;
`;
export const CommentTextArea = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  outline: none;
  resize: none;
  width: 90%;
  margin: 1% 0;
  padding: 1%;
  ::placeholder {
    color: #c4c4c4;
  }
`;

export const CommentBtn = styled.button<{
  width?: string;
  margin?: string;
  height?: string;
}>`
  /* align-self: flex-end; */

  cursor: pointer;
  background-color: ${(props) => {
    if (props.disabled) return `#C4C4C4`;
    else return props.theme.color.black;
  }};
  color: ${(props) => props.theme.color.white};
  padding: 7px;
  margin: 1% 2%;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.black};
  min-width: 5.5rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;
