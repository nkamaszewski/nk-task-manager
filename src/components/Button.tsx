import React from "react";
import ButtonStyle from "../styles/ButtonStyle";

interface Props {
  label: string;
  clickAction: Function;
}

export const Button = ({ label, clickAction }: Props) => (
  <ButtonStyle>
    <div className="btn" onClick={() => clickAction()}>
      <p>{label}</p>
    </div>
  </ButtonStyle>
);
