import React from "react";
import { Todo } from "../../types/types";
import { connect } from "react-redux";
import Row from "./Row";

interface Props {
  list: Todo[];
}

const List = ({ list }: Props) => {
  return (
    <>
      {list.map((item: Todo) => (
        <Row key={item.id + item.title} item={item} />
      ))}
    </>
  );
};

const mapStateToProps = ({ list: { list } }: any) => ({
  list
});

export default connect(mapStateToProps)(List);
