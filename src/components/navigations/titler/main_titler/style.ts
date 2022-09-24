import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  .text-container {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 50%;
    margin-top: 10px;
  }
`;

export default Container;
