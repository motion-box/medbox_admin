import styled from "styled-components";

const Container = styled.div`
  .navigation {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    position: relative;

    .number {
      position: absolute;
      margin-left: 150px;
    }
  }

  .information {
    display: grid;
    grid-auto-flow: row;
    justify-content: start;
    padding: 16px 0;
    gap: 24px;

    .descript {
      margin-top: -20px;
      margin-left: 20px;
    }

    .card-wrap {
      background-color: var(--static_white);
      border-radius: 16px;

      .litle-card {
        display: grid;
        grid-auto-flow: column;
        padding: 8px 16px;
        gap: 8px;
        grid-template-columns: 1fr 1fr 1fr;
        border-bottom: 1px solid var(--dinamic_light_gray30);
      }

      .text {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        padding: 11px 16px;
      }
    }
  }
`;

export default Container;
