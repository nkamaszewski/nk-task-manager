import styled from "styled-components";

const UserSelectorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 22px;
  label {
    margin: 10px;
  }
  .radio {
    width: 16px;
    height: 16px;
    color: red;
  }

  .title {
    font-size: 12px;
  }

  .Alice {
    color: pink;
  }

  .Bob {
    color: lightblue;
  }

  .Frank {
    color: yellowgreen;
  }
`;
export default UserSelectorStyle;
