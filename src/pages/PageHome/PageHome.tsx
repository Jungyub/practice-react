import { ReactElement, useState, useEffect } from "react";
import ViewHome from "./view";

const PageHome = (): ReactElement => {
  const [cardList, setCardList] = useState([]);
  const [inputVal, setInputVal] = useState("");

  // data fetch and update
  useEffect(() => {}, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputVal(value);
  };

  return <ViewHome handleChangeInput={handleChangeInput} cardList={cardList} />;
};

export default PageHome;
