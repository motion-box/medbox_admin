import styled from "styled-components";

const Container = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 51px;
  height: 31px;
  background-color: ${({ checked }) =>
    checked ? "var(--dynamic_light_gray30)" : "var(--static_blue)"};
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) =>
      checked ? "calc(50% - 27px/2 - 10px)" : "calc(50% - 27px/2 + 10px)"};
    top: calc(50% - 27px / 2);
    width: 27px;
    height: 27px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export default Container;
