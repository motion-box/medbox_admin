import { ItemWrapOptions } from "./utils/item-wrap.type";
import styled from "styled-components";

const Container = styled.div<ItemWrapOptions>`
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  width: ${(props) => `${props.container.width}px`};
  height: ${(props) => `${props.container.height}px`};
  background-color: ${(props) =>
    `var(--${props.container.backgroundColor || ""})`};
  border: ${(props) =>
    props.container.borderColor
      ? `1px solid var(--${props.container.borderColor})`
      : undefined};
  border-radius: ${(props) => props.container.borderRadius};
`;

export default Container;
