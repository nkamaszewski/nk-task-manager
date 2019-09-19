import React, { useState } from "react";
import HeaderListStyle from "../../styles/HeaderListStyle";
import { FaPen } from "react-icons/fa";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/list";
import { Todo } from "../../types/types";

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
    onAddItem({ userId, title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <HeaderListStyle>
      <FaPen className="pen" />
      <input
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
        onBlur={addItem}
      />
    </HeaderListStyle>
  );
};

const mapStateToProps = ({ list: { list } }: any) => ({
  list
});

const mapDispatchToProps = (dispatch: any) => ({
  onAddItem: (item: Todo) => dispatch(addItem(item))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderList) as any);
