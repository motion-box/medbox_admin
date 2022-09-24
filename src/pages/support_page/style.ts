import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto auto 1fr;

  .header {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }
  .text-container {
    text-align: left;
    padding: 16px;

    .droplet {
      padding: 16px;
    }
  }
`;

export default Container;
