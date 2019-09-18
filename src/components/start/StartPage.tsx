import React from "react";
import { Footer } from "../Footer";
import { Button } from "../Button";
import { withRouter } from "react-router";
import { History } from "history";
import DashboardStyle from "../../styles/DashboardStyle";

interface Props {
  history: History;
}

const StartPage = ({ history }: Props) => {
  const handleOnClick = () => history.push("/list");

  return (
    <DashboardStyle>
      <Button label="Enter!" clickAction={handleOnClick} />
      <Footer />
    </DashboardStyle>
  );
};

export default withRouter(StartPage);
