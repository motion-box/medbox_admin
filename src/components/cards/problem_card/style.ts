import styled, { css } from "styled-components";
import { AllColorsType } from "../../resources/colorPalet";
import { ProblemCardStateType } from "./utils/problem-card-type";

interface Iprops {
  backgroundColor?: AllColorsType;
  isActive?: ProblemCardStateType;
}

const Container = styled.button<Iprops>`
  width: 100%;
  display: grid;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
  cursor: pointer;
  transition: 0.3s ease;
  :active {
    transform: scale(0.95);
  }

  .top-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }
  .bot-container {
    display: grid;
    align-items: center;
    justify-content: start;
  }

  ${(props) =>
    props.isActive === "active" &&
    css`
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    `}
  ${(props) => props.isActive === "disable" && css``}
`;

export default Container;
