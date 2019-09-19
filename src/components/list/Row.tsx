import React from "react";
import { Todo } from "../../types/types";
import RowStyle from "../../styles/RowStyle";

interface Props {
  item: Todo;
}

const Row = ({ item: { completed, title } }: Props) => {
  return (
    <RowStyle>
      <p>{completed}</p>
      <p>{title}</p>
    </RowStyle>
  );
};

export default Row;
