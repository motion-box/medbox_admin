import styled, { css } from "styled-components";
import { AppointmentCardStateType } from "./utils/appointment-card-type";

interface Iprops {
  isActive: AppointmentCardStateType;
}

const Container = styled.button<Iprops>`
  display: grid;
  border-radius: 16px;
  background-color: var(--static_white);
  align-self: center;
  justify-self: center;
  min-width: 530px;
  transition: 0.3s ease;
  :active {
    transform: scale(0.95);
  }
  ${(props) =>
    props.isActive === "active" &&
    css`
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    `}
  ${(props) =>
    props.isActive === "disable" &&
    css`
      filter: opacity(50%);
    `}
    

  .litle-card-wrap {
    display: grid;
    grid-auto-flow: column;
    padding: 0px 16px 8px;
    gap: 8px;
  }
`;

export default Container;
