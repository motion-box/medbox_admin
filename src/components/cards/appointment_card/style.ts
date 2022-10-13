import styled from "styled-components";

const Container = styled.div`
  display: grid;
  background-color: var(--static_white);

  .litle-card-wrap {
    display: grid;
    grid-auto-flow: column;
    padding: 0px 16px 8px;
    gap: 8px;
  }
`;

export default Container;
