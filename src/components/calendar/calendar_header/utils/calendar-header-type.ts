import { AllColorsType } from "../../../resources/colorPalet";

export type CalendarHeaderProps = {
  title: string;
  type: "usual" | "unusual";
};

export type CalendarHeaderOptionsType = {
  backgroundColor?: AllColorsType;
  btnBackgroundColor?: AllColorsType;
};
