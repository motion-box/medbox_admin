import styled from "styled-components";

const Container = styled.div`
  position: relative;
  .title {
    position: sticky;
    display: grid;
    top: 0px;
    padding-top: 16px;
    z-index: 100;
    background-color: var(--dynamic_light_bg);
  }
  .graph {
    width: 100%;
    height: 246px;
    border-radius: 16px;
    background-color: var(--static_white);
  }

  .appointment-wrap {
    display: grid;
    grid-template-rows: 1fr;
    padding: 0px 80px;
    gap: 24px;

    .appointment-content-wrap {
      display: grid;
      align-self: center;
      justify-self: center;
      max-width: 530px;
      min-width: 530px;
      gap: 16px;
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
  }
`;

export default Container;
