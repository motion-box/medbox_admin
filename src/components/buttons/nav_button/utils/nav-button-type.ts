import { TextProviderOptions } from "../../../providers/text_provider/utils/text-provider-type";
import { AllIconsType, IconProps } from "../../../resources/all_icons/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type NavButtonProps = {
  onClick: () => void;
  text?: string;
  icon?: AllIconsType;
  isReverse?: boolean;
  options?: NavButtonOptions;
  backgroundColor?: AllColorsType;
};

export type NavButtonOptions = {
  iconOptions?: IconProps;
  textOptions?: TextProviderOptions;
};
