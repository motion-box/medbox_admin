import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding-top: 24px;
  gap: 24px;

  .material-wrap {
    display: grid;
    gap: 16px;

    .material-button-wrap {
      border-radius: 16px;
      overflow: hidden;
      background-color: var(--static_white);
    }
  }
`;

export default Container;
