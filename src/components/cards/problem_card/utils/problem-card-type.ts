import { AllIconsType } from "../../../resources/all_icons/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type ProblemCardProps = {
  id: number;
  title: string;
  number?: number;
  key: string;
  iconWrap?: ProblemCardIconType;
  icon?: ProblemCardIconType;
  backgroundColor?: AllColorsType;
  isActive?: ProblemCardStateType;
  onClick?: () => void;
};

export type ProblemCardIconType = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
  iconBackgorund?: AllColorsType;
};

export type ProblemCardStateType = "all_active" | "active" | "disable";
