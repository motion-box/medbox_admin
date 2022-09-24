import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 16px 0px;
  grid-template-rows: auto auto 1fr;
  gap: 24px;

  .image-container {
    display: grid;
    justify-content: center;
  }

  .appoinment-container {
    padding: 0 80px;
  }
`;

export default Container;
