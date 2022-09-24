import styled from "styled-components";
import { AllColorsType } from "../../resources/colorPalet";

type Iprops = {
  color: AllColorsType;
  backgroundColor: AllColorsType;
};

const Container = styled.div<Iprops>`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  padding: 4px;
  gap: 4px;
  border-radius: 4px;
  background-color: ${(props) => `var(--${props.backgroundColor})`};
  border: 1px solid ${(props) => `var(--${props.color})`};

  .client-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 4px;

    .time-container {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 4px;
    }

    .wait-container {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 4px;
    }
  }
`;

export default Container;
