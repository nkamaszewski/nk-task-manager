import styled from "styled-components";

const DashboardStyle = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;

  main {
    height: 550px;
  }

  .loader {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export default DashboardStyle;
