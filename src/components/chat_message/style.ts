import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 8px 16px;
  gap: 4px;
  border-radius: 16px;
  justify-content: space-between;
  background-color: var(--dynamic_light_gray30);
  position: relative;

  .chat {
    width: 500px;
  }

  .text-bottom-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
    gap: 4px;
    position: absolute;
    right: 16px;
    bottom: 8px;
  }

  .photo-container {
    display: grid;
    grid-auto-flow: column;
    gap: 8px;
  }
`;

export default Container;
