import { AllColorsType } from "../../../resources/colorPalet";

export type ScheduleChildHeaderProps = {
  date: string;
  week: string;
  type: "inProcessFalse" | "inProcessTrue" | "inProcessActive";
};

export type ScheduleChildHeaderOptionsType = {
  backgroundColor?: AllColorsType;
  week: AllColorsType;
  weekBackgroundColor?: AllColorsType;
};
