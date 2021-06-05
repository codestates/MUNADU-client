import styled from "styled-components";

export const Card = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-color: #282c34;
  background-size: 100% 100%;
  height: 100px;
  width: 70px;
`;

export const SetBoard = styled.div``;

export const SignBoard = styled.form`
  background: #eeeeee;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 41px;
  margin: 13vh auto;
  height: auto;
  min-width: 400px;
  position: relative;
  z-index: 2;
  width: 20vw;
  @media (max-width: 1024px) {
    margin: 0 auto;
    min-width: 375px;
    height: 100vh;
  }
`;
export const SingBackground = styled.div`
  display: flex;
  width: 100vw;
  margin: 0px;
`;

export const Title = styled.h1``;

export const Alert = styled.div<{ color?: any }>`
  margin-bottom: 10px;
  color: ${(props) => (props.color ? "green" : "red")};
  margin: 0px;
`;

export const GoogleIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-left: -10px;
`;
