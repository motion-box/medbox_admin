import styled from "styled-components";

const Container = styled.div`
  position: relative;

  .title-wrapper {
    position: sticky;
    display: grid;
    top: 0px;
    padding-top: 16px;
    z-index: 100;
    background-color: var(--dynamic_light_bg);
  }
  .graph {
    width: 100%;
    height: 246px;
    border-radius: 16px;
    background-color: var(--static_white);
  }
`;

export default Container;
