import styled from "styled-components";

const Container = styled.button`
  position: relative;
  width: 100%;
  height: 28px;
  display: grid;
  justify-content: center;
  align-items: center;
  span {
    z-index: 1;
  }
  cursor: pointer;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    background-color: var(--dynamic_light_bg2);
  }
`;

export default Container;
