import React, { useState } from "react";
import { withRouter } from "react-router";
import { History } from "history";
import DashboardStyle from "../../styles/DashboardStyle";
import { USERS } from "../../helpers/constans";
import UserSelector from "./UserSelector";
import Button from "../Button";
import Footer from "../Footer";

interface Props {
  history: History;
}

const StartPage = ({ history }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState(USERS[0].id);

  const handleOnClick = () => history.push(`/list/${selectedUserId}`);

  return (
    <DashboardStyle>
      <UserSelector
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <Button label="Enter!" clickAction={handleOnClick} />
      <Footer />
    </DashboardStyle>
  );
};

export default withRouter(StartPage);
