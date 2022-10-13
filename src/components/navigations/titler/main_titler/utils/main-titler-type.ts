import { AllIconsType } from "../../../../resources/all_icons/allIcons";
import { AllColorsType } from "../../../../resources/colorPalet";

export type MainTitlerProps = {
  title: string;
  button?: ButtonType;
};

export type ButtonType = {
  leftButton?: {
    iconName: AllIconsType;
    text: string;
    color?: AllColorsType;
  };
  rightButton?: {
    iconName: AllIconsType;
    text: string;
    color?: AllColorsType;
  };
};
