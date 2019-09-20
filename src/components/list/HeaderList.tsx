import React, { useState } from "react";
import HeaderListStyle from "../../styles/HeaderListStyle";
import { FaPen } from "react-icons/fa";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/list";
import { Todo, State } from "../../types/types";

interface Props {
  list: Todo[];
  onAddItem: Function;
  match: { params: { userId: string } };
}

const HeaderList = ({
  list,
  onAddItem,
  match: {
    params: { userId }
  }
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue) {
      onAddItem({ userId, title: inputValue, completed: false });
      setInputValue("");
    }
  };

  const onKeyDownHandler = (e: any) => {
    if (e.key === "Escape") {
      setInputValue("");
    } else if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <HeaderListStyle>
      <FaPen className="pen" />
      <input
        placeholder={
          list && list.length >= 10
            ? "Max size of todos achived (10) - delete completed tasks first"
            : "What needs to be done? - start typing"
        }
        disabled={list && list.length >= 10}
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
        onBlur={addItem}
        onKeyDown={onKeyDownHandler}
      />
    </HeaderListStyle>
  );
};

const mapStateToProps = ({ list: { list } }: { list: State }) => ({
  list
});

const mapDispatchToProps = (dispatch: Function) => ({
  onAddItem: (item: Todo) => dispatch(addItem(item))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderList) as any);
