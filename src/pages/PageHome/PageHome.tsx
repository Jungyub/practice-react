import { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./components/card";
import { addTodo, toggleTodo, removeTodo } from "../../modules/todos";
import { RootState } from "../../modules";

const PageHome = (): ReactElement => {
  const [inputVal, setInputVal] = useState("");
  // data fetch and update
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleClickRegister = () => {
    dispatch(addTodo(inputVal));
    setInputVal("");
  };

  const handleClickToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleClickRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <input
            placeholder="오늘의 할 일을 입력해보세요"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <RegisterButton onClick={handleClickRegister}>등록</RegisterButton>
        </HeaderWrapper>
      </HeaderContainer>
      <BodyContainer>
        <BodyWrapper>
          {todos.map((todo) => {
            const { id, text, isToggle } = todo;
            return (
              <Card
                key={id}
                id={id}
                text={text}
                isToggle={isToggle}
                handleClickToggle={handleClickToggle}
                handleClickRemove={handleClickRemove}
              />
            );
          })}
        </BodyWrapper>
      </BodyContainer>
    </HomeContainer>
  );
};

export default PageHome;

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
    padding: 0px 30px;
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

const RegisterButton = styled.button`
  width: 100px;
`;

const BodyContainer = styled.div`
  min-height: calc(100vh - 96px);
  background-color: #f0f1f3;
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  width: 1232px;
  margin: 20px 0;
`;
