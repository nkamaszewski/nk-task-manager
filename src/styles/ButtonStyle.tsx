import styled from "styled-components";

const ButtonStyle: any = styled.div`
  .btn {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    transition: background-color 2s ease;
    background-color: white;
    color: #282c34;
    font-size: 48px;
    display: flex;
    justify-content: center;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #ff4136;
  }
`;
export default ButtonStyle;
