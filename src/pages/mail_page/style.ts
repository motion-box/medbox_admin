import styled from "styled-components";

const Container = styled.div`
  .scroll-item {
    display: grid;
    grid-auto-rows: max-content;
    height: 100vh;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
  }
`;

export default Container;
