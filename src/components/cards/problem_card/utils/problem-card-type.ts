import { AllIconsType } from "../../../resources/all_icons/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type ProblemCardProps = {
  id?: number;
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
