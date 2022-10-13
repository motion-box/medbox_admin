import { AllIconsType } from "../../../../../resources/all_icons/allIcons";

export type SettingsButtonRowProps = {
  icon: AllIconsType;
  title: string;
  notification?: string;
  onClick?: () => void;
};
