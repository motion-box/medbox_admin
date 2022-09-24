import { AllIconsType } from "../../../../resources/allIcons";
import { AllColorsType } from "../../../../resources/colorPalet";

export type LargeTitleProps = {
  title: string;
  description: string;
  button?: LargeTitleButton;
  photo: string;
  type: "big" | "middle";
} & largeTitleOptions;

export type largeTitleOptions =
  | {
      type: "big";
      iconName?: never;
    }
  | {
      type: "middle";
      iconName?: AllIconsType;
    };

export type LargeTitleButton = {
  iconName?: AllIconsType;
};

export type LargeTitleOptions = {
  fontSizeTitle: 34 | 17;
  fontSizeDesc: 15 | 12;
  photoSize: "64" | "44";
  iconOptions: {
    width: 30 | undefined;
    height: 30 | undefined;
    color: AllColorsType | undefined;
  };
};
