import styled from "styled-components";
import { AllColorsType } from "../../resources/colorPalet";

interface Iprops {
  backgroundColor?: AllColorsType;
}

const Container = styled.div<Iprops>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 4px;
  gap: 4px;
  border-radius: 4px;
  background-color: ${(props) =>
    `var(--${props.backgroundColor || undefined})`};

  .left-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 4px;
    text-overflow: ellipsis;
  }
`;

export default Container;
