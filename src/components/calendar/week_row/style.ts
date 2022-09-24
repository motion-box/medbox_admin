import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  .text-wrap {
    width: 40px;
    display: grid;
    text-align: center;
  }
`;

export default Container;
