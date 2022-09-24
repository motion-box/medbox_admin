import { AllIconsType } from "../../../resources/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type ProblemCardProps = {
  title: string;
  iconWrap?: ProblemCardIconType;
  icon?: ProblemCardIconType;
  number?: number;
  backgroundColor?: AllColorsType;
};

export type ProblemCardIconType = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
  iconBackgorund?: AllColorsType;
};
