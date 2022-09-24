import styled from "styled-components";
import { ScheduleChildHeaderOptionsType } from "./utils/shedule-child-header-type";

const Container = styled.div<ScheduleChildHeaderOptionsType>`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 16px;
  background-color: ${(props) =>
    props.backgroundColor ? `var(--${props.backgroundColor})` : ""};
  .week-wrap {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 10px;
    border-radius: 18px;
    background-color: ${(props) =>
      props.weekBackgroundColor ? `var(--${props.weekBackgroundColor})` : ""};
  }
`;

export default Container;
