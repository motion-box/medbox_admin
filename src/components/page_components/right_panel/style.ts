import styled from "styled-components";
import { RightPanelProps } from "./utils/right-panel-type";

const Container = styled.div<RightPanelProps>`
  position: relative;
  width: 375px;
  height: 100vh;
  padding: 0 16px;
  gap: 8px;
  border-left: 1px solid
    ${(props) => `var(--${props.borderLeft || "dynamic_light_stroke" || ""})`};
  background-color: var(--dynamic_light_bg);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;

export default Container;
