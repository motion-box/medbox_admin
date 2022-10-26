import styled from "styled-components";
import { RightPanelProps } from "./utils/right-panel-type";

const Container = styled.div<RightPanelProps>`
  position: relative;
  width: 375px;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  padding: 16px 16px;
  gap: 8px;
  border-left: 1px solid ${(props) => `var(--${props.borderLeft || ""})`};
  border-right: 1px solid ${(props) => `var(--${props.borderRight || ""})`};
  background-color: var(--dynamic_light_bg);
  overflow-y: hidden;
`;

export default Container;
