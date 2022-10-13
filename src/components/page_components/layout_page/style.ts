import styled, { css } from "styled-components";
import { LayoutPageProps } from "./utils/page-layout-type";

const Container = styled.div<LayoutPageProps>`
  ${(props) =>
    props.mainPage &&
    css`
      grid-template-columns: auto 1fr auto;
    `}
  ${(props) =>
    props.timetablePage &&
    css`
      grid-template-columns: auto 1fr;
    `}
  ${(props) =>
    props.supportPage &&
    css`
      grid-template-columns: auto auto 1fr;
    `}
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-auto-flow: column;
  background-color: var(--dynamic_light_stroke);
`;

export default Container;
