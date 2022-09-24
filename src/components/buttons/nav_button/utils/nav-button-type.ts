import { TextProviderOptions } from "../../../../models/textProviderModel";
import { AllIconsType, IconProps } from "../../../resources/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type NavButtonProps = {
  onClick: () => void;
  text?: string;
  icon?: AllIconsType;
  options?: NavButtonOptions;
  flexDirection?: true;
  backgroundColor?: AllColorsType;
  padding?: number;
};

export type NavButtonOptions = {
  iconOptions?: IconProps;
  textOptions?: TextProviderOptions;
};
