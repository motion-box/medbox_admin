import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 42px;
  grid-auto-flow: column;
  align-items: center;

  .spacer {
    width: 100%;
  }

  .title-text {
    left: 50%;
    transform: translate(-50%);
    position: absolute;
  }

  .title-wrapper {
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

export default Container;
