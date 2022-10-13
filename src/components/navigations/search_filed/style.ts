import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;

  .input-container {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    position: relative;

    input {
      border: none;
      outline: none;
      display: grid;
      grid-auto-flow: column;

      height: 38px;
      padding-left: 36px;
      padding-right: 36px;
      border-radius: 8px;
      background-color: var(--dynamic_light_stroke);

      ::placeholder {
        text-justify: center;
        font-size: 17px;
        font-weight: 400;
        color: var(--dynamic_light_gray60);
      }
    }
    .search-container {
      position: absolute;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 8px;
    }
    .close-container {
      width: 18px;
      height: 18px;
      position: absolute;
      right: 0;
      top: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 8px;
    }
  }
`;

export default Container;
