import styled from "styled-components";
import { RightPanelProps } from "./utils/right-panel-type";

const Container = styled.div<RightPanelProps>`
  width: 375px;
  height: 100vh;
  display: grid;
  padding: 16px;
  gap: 8px;
  border-left: 1px solid var(--dynamic_light_stroke);
  background-color: var(--dynamic_light_bg);

  .button {
    width: 343px;
    position: absolute;
    bottom: 24px;
  }
`;

export default Container;
