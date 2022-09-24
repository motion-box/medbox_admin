import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  .left-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 16px;

    .title-container {
      display: grid;
      align-items: center;
      gap: 2px;
    }
  }

  .right-container {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
    justify-content: end;
  }
`;

export default Container;
