import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 16px 0px;
  grid-template-rows: auto auto 1fr;
  gap: 24px;

  .problem-card {
    display: grid;
    grid-auto-flow: column;
    padding: 0 16px;
    gap: 16px;
  }

  .appoinment-container {
    padding: 0 80px;
  }
`;

export default Container;
