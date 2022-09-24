import { MainButtonOptions } from "../../../models/buttonModel";
// TODO: change bg-color
import styled from "styled-components";

interface Iprops extends MainButtonOptions {}

const Container = styled.button<Iprops>`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  width: ${(props) =>
    `${
      props.width !== "100%"
        ? `${props.width ? `${props.width}px` : "fit-contnent"}`
        : "100%"
    }`};
  height: ${(props) =>
    `${
      props.height !== "100%"
        ? `${props.height ? `${props.height}px` : "fit-contnent"}`
        : "100%"
    }`};
  padding: ${(props) => `${props.padding || 12}px `};
  border-radius: ${(props) => `${props.borderRadius || 16}px `};
  background-color: ${(props) =>
    `var(--${props.backgroundColor || undefined})`};
  cursor: pointer;
`;

export default Container;
// flex-direction: row-reverse;
