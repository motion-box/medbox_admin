import { AllIconsType, IconProps } from "./../components/resources/allIcons";
import { AllColorsType } from "../components/resources/colorPalet";
import { TextProviderOptions } from "./textProviderModel";

export interface MainButtonModel {
  onClick: () => void;
  text?: string;
  icon?: AllIconsType;
  options?: MainButtonOptions;
}

export interface MainButtonOptions {
  width?: number | "100%";
  height?: number | "100%";
  padding?: number;
  borderRadius?: number;
  backgroundColor?: AllColorsType | undefined;
  iconOptions?: IconProps;
  textOptions?: TextProviderOptions;
}

export interface SwitcherModel {
  toggle: boolean;
  setToggle: (state: boolean) => void;
  backgroundColor?: AllColorsType;
}
