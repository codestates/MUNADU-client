import styled from "styled-components";

const Button = styled.button<{
  color?: string;
  width?: string;
  margin?: string;
  height?: string;
}>`
  margin: ${(props) => (props.margin ? props.margin : "10px")};
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
  border: 1px solid
    ${(props) =>
      props.color === "white"
        ? props.theme.color.black
        : props.theme.color.white};
  min-width: 5.5rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

export default Button;
