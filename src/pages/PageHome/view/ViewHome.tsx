import { ReactElement } from "react";
import styled from "styled-components";

interface IViewHome {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardList: Array<ICardList>;
}

interface ICardList {
  id: number;
  title: string;
  logo_file_url: string;
}

const ViewHome = ({ handleChangeInput, cardList }: IViewHome): ReactElement => {
  return (
    <HomeContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <SearchIcon></SearchIcon>
          <input
            placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
            onChange={handleChangeInput}
          />
        </HeaderWrapper>
      </HeaderContainer>
      <BodyContainer>
        <BodyWrapper></BodyWrapper>
      </BodyContainer>
    </HomeContainer>
  );
};

export default ViewHome;

const HomeContainer = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  background-color: #524fa1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 1232px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  :focus {
  }
  input {
    width: 100%;
    height: 100%;
    padding-right: 16px;
    background-color: transparent;
    border: none;
    color: white;
    ::placeholder {
      color: white;
    }
    :focus {
      outline: none;
    }
  }
`;

const SearchIcon = styled.div`
  width: 48px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: center;
`;

const BodyContainer = styled.div`
  min-height: calc(100vh - 96px);
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 16px;
  width: 1232px;
  margin: 20px 0;
`;
