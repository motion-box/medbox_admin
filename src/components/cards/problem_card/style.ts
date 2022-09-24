import styled from "styled-components";
import { AllColorsType } from "../../resources/colorPalet";

interface Iprops {
  backgroundColor?: AllColorsType;
}

const Container = styled.div<Iprops>`
  width: 100%;
  display: grid;
  padding: 16px;
  gap: 16px;
  border-radius: 16px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};

  .top-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Container;
