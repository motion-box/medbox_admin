import { AllIconsType, IconProps } from "../components/resources/allIcons";
import { AllColorsType } from "../components/resources/colorPalet";

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
