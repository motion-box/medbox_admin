import { AllIconsType } from "./../../../resources/allIcons";
import { AllColorsType } from "../../../resources/colorPalet";

export type ButtonRowProps = {
  title: string;
  description: string;
  titleIcon?: true | ButtonRowTitleIconType;
  bottom?: ButtonRowBottom;
  rightText?: ButtonRowRightText;
  toggle?: ButtonRowToggle;
  rigthIcons?: ButtonRowRightIcons;
  isEdit?: true;
  badge?: true | AllColorsType;
} & ButtonRowOptional;

export type ButtonRowOptional =
  | {
      inside?: ButtonRowOptionalInside;
      outside?: never;
    }
  | {
      inside?: never;
      outside?: ButtonRowOptionalOutside;
    };

export type ButtonRowOptionalInside = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
};

export type ButtonRowOptionalOutside =
  | {
      iconName: AllIconsType;
      iconColor: AllColorsType;
      iconBackground: AllColorsType;
      photoUrl?: never;
    }
  | {
      iconName?: never;
      iconColor?: never;
      iconBackground?: never;
      photoUrl: string;
    };

export type ButtonRowTitleIconType = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
};

export type ButtonRowBottom =
  | {
      first: string | ButtonRowBottomType;
      second: string | ButtonRowBottomType;
    }
  | {
      first: string | ButtonRowBottomType;
      second?: never;
    };

export type ButtonRowBottomType = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
  text: string;
};

export type ButtonRowRightText =
  | {
      title: string;
      label: string;
    }
  | {
      title?: never;
      label: string;
    };

export type ButtonRowToggle = {
  state: boolean;
  setState: (state: boolean) => void;
};

export type ButtonRowRightIcons =
  | {
      first: true | ButtonRowRightIcon<() => void>;
      second: true | ButtonRowRightIcon<never>;
    }
  | {
      first: true | ButtonRowRightIcon<() => void>;
      second?: never;
    }
  | {
      first?: never;
      second: true | ButtonRowRightIcon<never>;
    };

export type ButtonRowRightIcon<T> = {
  iconName: AllIconsType;
  iconColor: AllColorsType;
  onClick?: T;
};
