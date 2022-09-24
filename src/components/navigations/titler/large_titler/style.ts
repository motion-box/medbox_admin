import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 0px;

  .left-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 16px;

    .title-container {
      display: grid;
      gap: 2px;
    }
  }
`;

export default Container;
