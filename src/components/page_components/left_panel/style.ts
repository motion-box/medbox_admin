import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  height: 100vh;
  display: grid;
  grid-auto-rows: max-content;
  padding: 0 16px;
  gap: 24px;
  border-right: 1px solid var(--dynamic_light_stroke);
  background-color: var(--dynamic_light_bg);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }

  .navigation-container {
    position: sticky;
    display: grid;
    padding-top: 16px;
    padding-bottom: 8px;
    top: 0px;
    gap: 8px;
    z-index: 100;
    background-color: var(--dynamic_light_bg);
  }
`;

export default Container;
