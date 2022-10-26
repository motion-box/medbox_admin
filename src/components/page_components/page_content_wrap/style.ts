import styled, { css } from "styled-components";
import { PageContentWrapProps } from "./utils/page-content-wrap-type";

const Container = styled.div<PageContentWrapProps>`
  width: 100%;
  display: grid;
  padding: 0px 16px;
  ${(props) =>
    props.mainWrap &&
    css`
      grid-template-rows: auto auto 1fr;
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
      padding-top: 16px;
      gap: 0px;
    `};
`;

export default Container;
