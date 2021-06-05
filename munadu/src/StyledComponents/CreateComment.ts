import styled from "styled-components";

export const CommentCreateBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid #eeeeee; ;
`;

export const CommentTextArea = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  align-self: center;
  outline: none;
  resize: none;
  width: 80%;
  margin: 1% 0;
  align-content: center;
  padding: 1%;
  ::placeholder {
    color: #c4c4c4;
  }
`;

export const CommentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
  align-self: flex-start;
  margin-left: 10%;
`;
export const CommentBtn = styled.button<{
  color?: string;
  width?: string;
  margin?: string;
  height?: string;
}>`
  align-self: flex-end;
  margin-right: 10%;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "white"
      ? props.theme.color.white
      : props.theme.color.black};
  color: ${(props) =>
    props.color === "white"
      ? props.theme.color.black
      : props.theme.color.white};
  padding: 7px;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.black};
  min-width: 5.5rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

export const CommentCaution = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  color: #666666;
`;
