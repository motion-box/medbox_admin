import styled, { css } from "styled-components";
import { PageContentWrapProps } from "./utils/page-content-wrap-type";

const Container = styled.div<PageContentWrapProps>`
  width: 100%;
  display: grid;
  grid-auto-rows: max-content;
  padding: 0px 16px 0px;
  ${(props) =>
    props.mainWrap &&
    css`
      gap: 24px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    `}
  ${(props) =>
    props.messengerWrap &&
    css`
      gap: 0px;
    `}
`;

export default Container;
