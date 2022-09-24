import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;

  .header {
    justify-content: start;
    padding: 0px 16px 8px;
  }
  .titler {
    padding: 0px 0px 16px;
    justify-content: start;
  }

  .item-container {
    border-radius: 16px;
    background-color: var(--static_white);
    overflow: hidden;
  }
`;

export default Container;
