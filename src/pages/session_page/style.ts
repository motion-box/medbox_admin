import styled from "styled-components";

const Container = styled.div`
  .session-title {
    position: sticky;
    display: grid;
    grid-template-rows: max-content;
    padding-top: 16px;
    top: 0px;
    z-index: 100;
    background-color: var(--dynamic_light_bg);
  }

  .button-wrap {
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--static_white);

    .litle-card-wrap {
      display: grid;
      grid-auto-flow: column;
      padding: 0px 16px 8px;
      gap: 8px;
    }
  }

  .problem-card {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }
  .right-panel-item {
    height: calc(100vh - 130px);
    grid-template-rows: max-content;
    .item-wrap {
      display: grid;
      padding-top: 24px;
      gap: 24px;

      .card-wrap {
        display: grid;
        .appointment-card {
          display: grid;
          padding: 8px 0px 0px;
          background-color: var(--static_white);
          border-radius: 16px;

          .litle-card-wrap {
            display: grid;
            grid-auto-flow: column;
            padding: 0px 16px 8px;
            gap: 8px;
            border-bottom: 1px solid var(--dynamic_light_stroke);
          }
        }
        .text {
          padding: 8px 16px 0px;
        }
      }
    }
  }
`;

export default Container;
