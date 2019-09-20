import React from "react";
import { Todo, State } from "../../types/types";
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

const mapStateToProps = ({ list: { list } }: { list: State }) => ({
  list
});

export default connect(mapStateToProps)(List);
