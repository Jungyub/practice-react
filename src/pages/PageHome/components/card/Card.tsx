import { ReactElement } from "react";
import styled from "styled-components";
import { Todo } from "../../../../modules/todos";

interface ICard extends Todo {
  handleClickToggle: (id: number) => void;
  handleClickRemove: (id: number) => void;
}

const Card = ({
  id,
  text,
  isToggle,
  handleClickToggle,
  handleClickRemove,
}: ICard): ReactElement => {
  const done = { textDecoration: "line-through" };
  return (
    <CardContainer>
      <CardHeader
        onClick={() => handleClickToggle(id)}
        style={isToggle ? done : undefined}
      >
        {text}
      </CardHeader>
      <CardBody onClick={() => handleClickRemove(id)}>삭제</CardBody>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
  padding: 0px 30px;
  background-color: #dfe6e9;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
