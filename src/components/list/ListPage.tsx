import React, { useEffect } from "react";
import DashboardStyle from "../../styles/DashboardStyle";
import { connect } from "react-redux";
import { fetchTodosList } from "../../store/actions/list";
import List from "./List";
import HeaderList from "./HeaderList";
import { withRouter } from "react-router";
import Loader from "../Loader";
import { State } from "../../types/types";
import Footer from "../Footer";

interface Props {
  onFetchTodosList: Function;
  match: { params: { userId: string } };
  listLoading: boolean;
  errorMessage: string;
}

const ListPage = ({
  onFetchTodosList,
  match: {
    params: { userId }
  },
  listLoading,
  errorMessage
}: Props) => {
  useEffect(() => {
    onFetchTodosList(userId);
  }, [onFetchTodosList, userId]);

  return (
    <DashboardStyle>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <HeaderList />
          <main>
            {listLoading ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <List />
            )}
          </main>
          <Footer />
        </>
      )}
    </DashboardStyle>
  );
};

const mapStateToProps = ({
  list: { listLoading, errorMessage }
}: {
  list: State;
}) => ({
  listLoading,
  errorMessage
});

const mapDispatchToProps = (dispatch: Function) => ({
  onFetchTodosList: (userId: string) => dispatch(fetchTodosList(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage) as any);
