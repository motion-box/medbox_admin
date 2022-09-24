import { AllIconsType, IconProps } from "../../../resources/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";
export type ItemWrapProps = ItemOptionalType;

export type ItemOptionalType =
  | {
      isBadge: true;
      icon?: never;
      photo?: never;
      size?: never;
      borderRadius?: never;
      borderColor?: never;
      backgroundColor: AllColorsType;
    }
  | {
      isBadge?: never;
      icon?: ItemOptions;
      photo?: never;
      size?: ItemSize;
      borderRadius?: ItemBorderRadius;
      borderColor?: AllColorsType;
      backgroundColor?: AllColorsType;
    }
  | {
      isBadge?: never;
      icon?: never;
      photo?: string;
      size?: ItemSize;
      borderRadius?: ItemBorderRadius;
      borderColor?: AllColorsType;
      backgroundColor?: never;
    };

export type ItemSize = "4" | "16" | "30" | "32" | "44" | "56" | "64";
export type ItemBorderRadius = "8" | "100%";

type ItemOptions = { name: AllIconsType } & IconProps;

export type ItemWrapOptions = {
  container: {
    width: ItemSize;
    height: ItemSize;
    borderRadius: string;
    backgroundColor?: AllColorsType;
    borderColor?: AllColorsType;
  };
};
