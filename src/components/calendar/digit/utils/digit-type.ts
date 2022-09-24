import { AllColorsType } from "../../../resources/colorPalet";
export type DigitProps = {
  number: number;
  badge?: AllColorsType;
  type: "activeDay" | "pastDay" | "dayOff" | "comingDay" | "guidance";
};

export type DigitOptionsType = {
  backgroundColor?: AllColorsType;
  numberColor: AllColorsType;
  badgeColor?: AllColorsType;
  borderColor?: AllColorsType;
};
