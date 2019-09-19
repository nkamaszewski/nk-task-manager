import React, { useEffect } from "react";
import { Footer } from "../Footer";
import DashboardStyle from "../../styles/DashboardStyle";
import { connect } from "react-redux";
import { fetchTodosList } from "../../store/actions/list";
import List from "./List";
import HeaderList from "./HeaderList";
import { withRouter } from "react-router";

interface Props {
  onFetchTodosList: Function;
  match: { params: { userId: string } };
}

const ListPage = ({
  onFetchTodosList,
  match: {
    params: { userId }
  }
}: Props) => {
  useEffect(() => {
    onFetchTodosList(userId);
  }, [onFetchTodosList, userId]);

  return (
    <DashboardStyle>
      <HeaderList />
      <List />
      <Footer />
    </DashboardStyle>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onFetchTodosList: (userId: string) => dispatch(fetchTodosList(userId))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(ListPage) as any);
