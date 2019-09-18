import React, { useEffect } from "react";
import { Footer } from "../Footer";
import DashboardStyle from "../../styles/DashboardStyle";
import { connect } from "react-redux";
import { fetchTodosList } from "../../store/actions/list";

interface Props {
  list: any;
  onFetchTodosList: Function;
}

const ListPage = ({ onFetchTodosList }: Props) => {
  useEffect(() => {
    console.log("listPage effect");
    onFetchTodosList();
  }, [onFetchTodosList]);

  return (
    <DashboardStyle>
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
