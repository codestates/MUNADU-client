import styled from "styled-components";

export const Input = styled.input<{
  margin?: string;
  width?: number;
}>`
  border: 1px solid ${(props) => props.theme.color.black};
  border-width: 1.8px;
  font-size: 15px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding-left: 5px;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: 38px;
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;
