import ReadReview from "../DetailPage/ReadReview";
import ReadComment from "../DetailPage/ReadComment";
import { Text, TextBox, TextWrapper } from "../../Page_Components/DetailPage";
import { useState } from "react";
export default function UserLecord({ userId }: { userId: number }) {
  const [tabNum, setTabNum] = useState<number>(0);

  const setContent = () => {
    if (tabNum === 0) return <ReadReview userID={userId} />;
    else if (tabNum === 1) return <ReadComment userId={userId}></ReadComment>;
    else if (tabNum === 2)
      return <ReadComment userId={userId} isReview={true}></ReadComment>;
  };

  return (
    <>
      <TextWrapper>
        <TextBox>
          <Text
            onClick={() => {
              setTabNum(0);
            }}
            idx={0}
            tabValue={tabNum}
          >
            사형의 조언
          </Text>
          <Text
            onClick={() => {
              setTabNum(1);
            }}
            idx={1}
            tabValue={tabNum}
          >
            무술 한줄평
          </Text>
          <Text
            onClick={() => {
              setTabNum(2);
            }}
            idx={2}
            tabValue={tabNum}
          >
            조언 댓글
          </Text>
        </TextBox>
      </TextWrapper>
      {setContent()}
    </>
  );
}
