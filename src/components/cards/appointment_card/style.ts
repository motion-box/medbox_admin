import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;

  .card {
    display: grid;
    gap: 8px;
    background-color: var(--static_white);
    border-radius: 16px;
  }
  .litle-card-item {
    display: grid;
    grid-auto-flow: column;
    padding: 0px 16px 8px;
    gap: 8px;
  }
`;

export default Container;
