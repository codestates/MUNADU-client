import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 7px;
  width: 100%;
  position: relative;
  margin-bottom: 5%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 70%;
  }
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: #70707086;
  width: 100%;
`;

interface IProps {
  percent: number;
}
const Progress = styled(BaseBox)`
  background: #ffc400;
  width: ${({ percent }: IProps) => percent}%;
`;

const Kcal = styled.div`
  margin-left: 105%;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #1c1c1c;
`;

const Bar = ({ percent }: IProps) => {
  return (
    <div>
      <Container>
        <Background />
        <Progress percent={percent} />
        <Kcal>{percent * 10}kcal</Kcal>
      </Container>
    </div>
  );
};

export default Bar;
