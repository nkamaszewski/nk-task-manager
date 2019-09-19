import React from "react";
import HeaderListStyle from "../../styles/HeaderListStyle";
import { FaPen } from "react-icons/fa";

const HeaderList = () => {
  return (
    <HeaderListStyle>
      <FaPen className="pen" />
      <input placeholder="What needs to be done?" />
    </HeaderListStyle>
  );
};

export default HeaderList;
