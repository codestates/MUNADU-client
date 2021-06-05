import { Detail } from "../../StyledComponents/detail";

interface Idetail {
  img?: string;
  svg?: string;
  children: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
}

export default function DetailInfo({ img, svg, children }: Idetail) {
  return (
    <Detail.Board>
      <Detail.ImgBox>
        {img ? <Detail.Img src={img}></Detail.Img> : null}
        {svg ? <Detail.Img src={svg} /> : null}
      </Detail.ImgBox>
      <Detail.ChildrenBoard>{children}</Detail.ChildrenBoard>
    </Detail.Board>
  );
}
