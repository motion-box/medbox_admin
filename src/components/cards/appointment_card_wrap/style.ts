import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content;
  padding: 0px 64px;
  gap: 24px;

  .appointment-content-wrap {
    display: grid;
    align-self: center;
    justify-self: center;
    min-width: 530px;
    gap: 16px;
  }
`;

export default Container;
