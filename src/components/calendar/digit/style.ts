import styled from "styled-components";
import { DigitOptionsType } from "./utils/digit-type";

const Container = styled.div<DigitOptionsType>`
  position: relative;
  width: 40px;
  height: 40px;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
  /* border: 1px solid
    ${(props) => (props.borderColor ? `var(--${props.borderColor})` : "")}; */
  .badge {
    position: absolute;
    left: 18px;
    top: 32px;
  }
`;

export default Container;
