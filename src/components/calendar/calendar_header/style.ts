import { CalendarHeaderOptionsType } from "./utils/calendar-header-type";
import styled from "styled-components";

const Container = styled.div<CalendarHeaderOptionsType>`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
`;

export default Container;
