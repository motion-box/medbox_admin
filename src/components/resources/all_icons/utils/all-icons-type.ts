import { AllColorsType } from "../../colorPalet";
import { AllIconsType, IconProps } from "../allIcons";

export interface IconModel {
  icon?: AllIconsType;
  options?: IconOptionsModel;
}

export interface IconOptionsModel {
  backgroundColor?: AllColorsType;
  borderRadius?: number;
  borderColor?: AllColorsType;
  iconOptions?: IconProps;
  padding?: number;
}
