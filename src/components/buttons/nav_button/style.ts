import styled, { css } from "styled-components";
import { NavButtonProps } from "./utils/nav-button-type";

const Container = styled.button<NavButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  gap: 4px;
  border-radius: 7px;
  /* ${(props) =>
    !props.isReverse
      ? css`
          padding-left: 16px;
        `
      : css`
          padding-right: 16px;
        `} */

  cursor: pointer;
`;

export default Container;
