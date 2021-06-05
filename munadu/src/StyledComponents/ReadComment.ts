import styled from "styled-components";

export const CommentWrapper = styled.div`
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

export const CommentHeader = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  border-bottom: 1px solid #eeeeee; ;
`;

export const CommentBox = styled.div`
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 12em;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
`;

export const Comment = styled.div`
  padding-left: 7%;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  min-height: 5em;
  line-height: 30px;
  color: #1c1c1c;
`;
export const CommentDate = styled.div`
  min-width: 7em;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
`;
