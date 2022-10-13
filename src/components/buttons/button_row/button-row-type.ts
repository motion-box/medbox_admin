import { AllIconsType } from "../../resources/all_icons/allIcons";
import { ItemSize } from "./../../providers/item_wrap_provider/utils/item-wrap.type";
import { AllColorsType } from "../../resources/colorPalet";

export type ButtonRowProps = {
  item?: ItemOptions;
  leftContent?: LeftContentOptions;
  rightContent?: RightContentOptions;
  badge?: true | AllColorsType;
  borderBottom?: AllColorsType;
  onClick?: () => void;
};

export type ItemOptions = {
  icon?: AllIconsType;
  iconWrap?: {
    iconName: AllIconsType;
    iconColor?: AllColorsType;
    backgroundColor?: AllColorsType;
  };
  photo?: {
    size?: ItemSize;
    url: string;
    type?: "round" | "square";
  };
};

export type LeftContentOptions = {
  leftContentIcon?: {
    iconName?: AllIconsType;
    iconColor?: AllColorsType;
  };
  title: {
    text: string;
    titleIcon?: {
      iconName?: AllIconsType;
      iconColor?: AllColorsType;
    };
  };
  description?: string;
  bottom?: ButtonRowBottomOptions;
};

export type ButtonRowBottomOptions =
  | {
      rating?: {
        ratingIcon?: AllIconsType;
        ratingGrade?: string;
      };
      location: {
        locationIcon?: AllIconsType;
        locationGrade?: string;
      };
    }
  | {
      rating?: {
        ratingIcon?: AllIconsType;
        ratingGrade?: string;
      };
      location?: {
        locationIcon?: never;
        locationGrade?: never;
      };
    };

export type RightContentOptions = {
  title?: {
    text?: string;
    description?: string;
  };

  toggle?: ButtonRowToggle;
  rightContentIcon?: {
    iconName: AllIconsType;
    iconColor: AllColorsType;
  };
  chevron?: AllIconsType;
  closeBtn?: ButtonRowRightIcon<() => void>;
};

export type ButtonRowToggle = {
  state: boolean;
  setState: (state: boolean) => void;
};

export type ButtonRowRightIcon<T> = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
  onClick?: T;
};
