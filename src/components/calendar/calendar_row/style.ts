import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-radius: 13px;
  background-color: var(--static_white);

  .day-week-container {
    display: grid;
    gap: 8px;
  }
`;

export default Container;
