import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 42px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  .title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;

    /* .title-wrapper {
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    } */
  }
`;

export default Container;
