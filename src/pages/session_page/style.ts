import styled from "styled-components";

const Container = styled.div`
  .title {
    position: sticky;
    display: grid;
    top: 0px;
    padding-top: 16px;
    z-index: 100;
    background-color: var(--dynamic_light_bg);
  }

  .appointment-card-wrap {
    display: grid;
    grid-template-rows: 1fr;
    padding: 24px 80px;
    gap: 16px;

    .appointment-content-wrap {
      display: grid;
      align-self: center;
      justify-self: center;
      max-width: 530px;
      min-width: 530px;
      gap: 16px;
    }
  }

  .button-wrap {
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--static_white);

    .card-wrap {
      display: grid;
      grid-auto-flow: column;
      padding: 0px 16px 8px;
      gap: 8px;
    }
  }

  .item-wrap {
    display: grid;
    padding-top: 34px;
    gap: 24px;
  }

  .problem-card {
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }

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
`;

export default Container;
