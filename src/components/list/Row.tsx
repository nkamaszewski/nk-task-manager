import React from "react";
import { Todo } from "../../types/types";
import RowStyle from "../../styles/RowStyle";
import { FaCheckSquare, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { deleteItem, changeItem } from "../../store/actions/list";

interface Props {
  item: Todo;
  onDeleteItem: Function;
  onChangeItem: Function;
}

const Row = ({
  item: { completed, title, id },
  item,
  onDeleteItem,
  onChangeItem
}: Props) => {
  const toggleStatus = () => onChangeItem({ ...item, completed: !completed });

  return (
    <RowStyle completed={completed}>
      {completed ? (
        <FaCheckSquare className="icon" color="green" onClick={toggleStatus} />
      ) : (
        <FaCheckSquare className="icon" color="gray" onClick={toggleStatus} />
      )}

      <p className="title" onClick={toggleStatus}>
        {title}
      </p>
      {completed && (
        <FaTrashAlt
          className="icon"
          onClick={() => onDeleteItem(id)}
          title="delete task"
        />
      )}
    </RowStyle>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  onDeleteItem: (id: number) => dispatch(deleteItem(id)),
  onChangeItem: (item: Todo) => dispatch(changeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(Row);
