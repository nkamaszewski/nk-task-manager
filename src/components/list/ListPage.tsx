import React, { useEffect } from "react";
import { Footer } from "../Footer";
import DashboardStyle from "../../styles/DashboardStyle";
import { connect } from "react-redux";
import { fetchTodosList } from "../../store/actions/list";
import List from "./List";
import HeaderList from "./HeaderList";

interface Props {
  list: any;
  onFetchTodosList: Function;
}

const ListPage = ({ onFetchTodosList }: Props) => {
  useEffect(() => {
    onFetchTodosList();
  }, [onFetchTodosList]);

  return (
    <DashboardStyle>
      <HeaderList />
      <List />
      <Footer />
    </DashboardStyle>
  );
};

const mapStateToProps = ({ list: { list } }: any) => ({
  list
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchTodosList: () => dispatch(fetchTodosList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
