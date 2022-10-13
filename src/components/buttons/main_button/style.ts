import styled from "styled-components";
import { MainButtonProps } from "./utils/main-button-type";

const Container = styled.button<MainButtonProps>`
  width: 100%;
  height: 48px;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  padding: 0px;
  border-radius: 16px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
  cursor: pointer;
`;

export default Container;
