import styled from "styled-components";
import { ButtonRowProps } from "./button-row-type";

const Container = styled.div<ButtonRowProps>`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  padding: 0px 0px 0px 16px;
  cursor: pointer;

  .avatar {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 8px;
    padding-right: 8px;
  }

  .content {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 0px 16px 0px 0px;
    border-bottom: 1px solid
      ${(props) => `var(--${props.borderBottom || "dynamic_light_stroke"})`};

    .left-content {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-content: start;
      gap: 8px;
      align-items: center;
      padding: 11px 0px;

      .left-content-title {
        display: grid;
        align-items: center;
        text-align: start;
        gap: 2px;

        .left-content-title-top {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: max-content;
          gap: 4px;
        }

        .left-content-bottom {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: max-content;
          gap: 8px;
          padding-top: 2px;

          .rating {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: 4px;
          }
          .location {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            grid-template-columns: max-content;
            gap: 4px;
          }
        }
      }
    }

    .right-content {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-content: end;
      gap: 8px;
      align-items: center;
      padding: 11px 0px;

      .right-content-title {
        display: grid;
        text-align: start;
        align-items: center;
        gap: 2px;
      }
    }
  }
`;

export default Container;
