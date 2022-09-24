import styled from "styled-components";
import { NavButtonProps } from "./utils/nav-button-type";

const Container = styled.button<NavButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border-radius: 7px;
  flex-direction: ${(props) =>
    props.flexDirection === true ? "row" : "row-reverse"};
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
`;

export default Container;
