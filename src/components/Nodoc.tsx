import styled from "@emotion/styled";
import { VITE_APP_URL } from "../__mocks__/constants";
type Props = {
  type: string;
};

const Nodoc = ({ type }: Props) => {
  const noDocImg = () => {
    if (type === "공유 문서") {
      return "noshare";
    } else if (type === "중요 문서") {
      return "no_favorite";
    }
    return "no_doc";
  };
  const noDocText = () => {
    if (type === "공유 문서") {
      return "공유 문서가 없습니다.";
    } else if (type === "중요 문서") {
      return "중요 문서가 없습니다.";
    }
    return "문서가 없습니다.";
  };
  return (
    <Wrapper className="no_doc sub">
      <img src={`${VITE_APP_URL}/web/maxage1/common/img/${noDocImg()}.png`} alt="no_doc" />
      <dl>
        <dt>{noDocText()}</dt>
        <dd></dd>
      </dl>
    </Wrapper>
  );
};

export default Nodoc;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: calc(100vh - 255px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & dl {
    margin-top: 30px;
    font-size: 15px;
    color: #787878;
  }
`;
