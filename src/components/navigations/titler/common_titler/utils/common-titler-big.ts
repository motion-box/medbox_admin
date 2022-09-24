import { AllIconsType } from "../../../../resources/allIcons";
import { AllColorsType } from "../../../../resources/colorPalet";

export type CommonTitlerProps = {
  id?: number;
  title: string;
  photo?: string;
  button?: CommonTitlerButton;
  type: "big" | "middle";
} & CommonTitlerRightContainer;

export type CommonTitlerRightContainer =
  | {
      type: "big";
      photo?: string;
      btnText?: never;
      btnIconName?: never;
    }
  | {
      type: "big" | "middle";
      photo?: never;
      btnText?: string;
      btnIconName?: AllIconsType;
    };

export type CommonTitlerButton =
  | {
      text?: string;
      iconName?: AllIconsType;
      color?: AllColorsType;
    }
  | {
      text?: string;
      iconName?: never;
      color?: AllColorsType;
    }
  | {
      text?: never;
      iconName?: AllIconsType;
      color?: AllColorsType;
    };

export type CommonTitlerOptionsType = {
  textOptions: {
    fontWeight: 600 | 700;
    fontSize: 20 | 34;
    color: AllColorsType;
  };
  buttonOptions: {
    textOptions: {
      fontSize: 15 | 17;
      fontWeight: 400;
      color: AllColorsType;
    };
    iconOptions: {
      width: 16 | 24;
      height: 16 | 24;
      color: AllColorsType;
    };
  };
};
