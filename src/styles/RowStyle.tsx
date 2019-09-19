import styled from "styled-components";

const RowStyle: any = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  font-size: 22px;
  width: 800px;
  border-bottom: 1px solid gray;

  .title {
    padding: 0 24px;
    text-decoration: ${({ completed }: { completed: boolean }) =>
      completed ? "line-through" : "none"};
  }

  .icon {
    align-self: center;
  }

  .icon:hover,
  .title:hover {
    cursor: pointer;
  }
`;
export default RowStyle;
