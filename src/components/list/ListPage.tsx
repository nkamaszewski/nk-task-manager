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
}

const ListPage = ({
  onFetchTodosList,
  match: {
    params: { userId }
  },
  listLoading
}: Props) => {
  useEffect(() => {
    onFetchTodosList(userId);
  }, [onFetchTodosList, userId]);

  return (
    <DashboardStyle>
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
    </DashboardStyle>
  );
};

const mapStateToProps = ({ list: { listLoading } }: { list: State }) => ({
  listLoading
});

const mapDispatchToProps = (dispatch: Function) => ({
  onFetchTodosList: (userId: string) => dispatch(fetchTodosList(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage) as any);
