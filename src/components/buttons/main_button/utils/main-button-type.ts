import { AllIconsType } from "../../../resources/all_icons/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";
import { MainButtonOptions } from "./main-button-options";

export type MainButtonProps = {
  onClick: () => void;
  text?: string;
  icon?: AllIconsType;
  options?: MainButtonOptions;
  backgroundColor?: AllColorsType;
};
