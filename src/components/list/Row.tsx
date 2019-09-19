import React from "react";
import { Todo } from "../../types/types";
import RowStyle from "../../styles/RowStyle";
import { FaCheckSquare, FaTrashAlt } from "react-icons/fa";

interface Props {
  item: Todo;
}

const Row = ({ item: { completed, title } }: Props) => {
  return (
    <RowStyle completed={completed}>
      <p>
        {completed ? (
          <FaCheckSquare color="green" />
        ) : (
          <FaCheckSquare color="gray" />
        )}
      </p>
      <p className="title">{title}</p>
      {completed && <FaTrashAlt className="trash" />}
    </RowStyle>
  );
};

export default Row;
