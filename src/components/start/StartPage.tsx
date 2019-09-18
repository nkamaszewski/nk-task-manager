import React from "react";
import { Footer } from "../Footer";
import StartPageStyle from "../../styles/StartPageStyle";
import { Button } from "../Button";
import { withRouter } from "react-router";
import { History } from "history";

interface Props {
  history: History;
}

const StartPage = ({ history }: Props) => {
  const handleOnClick = () => history.push("/list");

  return (
    <StartPageStyle>
      <Button label="Enter!" clickAction={handleOnClick} />
      <Footer />
    </StartPageStyle>
  );
};

export default withRouter(StartPage);
