import styled from "styled-components";
import { ButtonRowPropsDemo } from ".";

const Container = styled.button<ButtonRowPropsDemo>`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 0px 0px 0px 16px;
  gap: 8px;
  position: relative;
  background-color: ${(props) => `var(--${props.backgroundColor || ""})`};
  cursor: pointer;
  .badge {
    position: absolute;
    left: 6px;
  }

  .icon-container {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }

  .content-container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    padding: 0px 16px 0px 0px;
    gap: 8px;
    border-bottom: 1px solid var(--dynamic_light_stroke);

    .left-content-container {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: auto 1fr;
      align-items: center;
      padding: 11px 0;
      gap: 8px;

      .title-container {
        display: grid;
        gap: 4px;

        .title-top-container {
          display: grid;
          grid-auto-flow: column;
          justify-content: start;
          align-items: center;
          gap: 4px;
        }

        .title-bottom-container {
          display: grid;
          grid-auto-flow: column;
          justify-content: start;
          gap: 8px;

          .title-bottom-left-container {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 4px;
          }

          .title-bottom-right-container {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 4px;
          }
        }
      }
    }
    .right-content-container {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      padding: 11px 0;
      gap: 8px;

      .time-container {
        display: grid;
        text-align: right;
      }
    }
  }
`;

export default Container;
