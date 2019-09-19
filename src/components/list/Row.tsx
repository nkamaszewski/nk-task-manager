import React from "react";
import { Todo } from "../../types/types";
import RowStyle from "../../styles/RowStyle";
import { FaCheckSquare, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { deleteItem } from "../../store/actions/list";

interface Props {
  item: Todo;
  onDeleteItem: Function;
}

const Row = ({ item: { completed, title, id }, onDeleteItem }: Props) => {
  return (
    <RowStyle completed={completed}>
      {completed ? (
        <FaCheckSquare className="icon" color="green" />
      ) : (
        <FaCheckSquare className="icon" color="gray" />
      )}

      <p className="title">{title}</p>
      {completed && (
        <FaTrashAlt className="icon" onClick={() => onDeleteItem(id)} />
      )}
    </RowStyle>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onDeleteItem: (id: number) => dispatch(deleteItem(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Row);
