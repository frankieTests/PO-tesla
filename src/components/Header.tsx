import styled from "@emotion/styled";
import SearchBar from "./SearchBar";
import { VITE_APP_STATIC } from "../__mocks__/constants";

const Header = () => {
  return (
    <Wrapper>
      <img className="logo_img" src={`${VITE_APP_STATIC}/common/logo/logo_pc.svg`} alt="logo" />
      <SearchBar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 88px;
  width: 100%;
  padding: 24px 0 24px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & .logo_img {
    width: 182px;
    cursor: pointer;
    margin-right: 3rem;
  }
`;
