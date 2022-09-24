import { AllColorsType } from "./../../../resources/colorPalet";
export type ScheduleChildProps = {
  largeTitle: string;
  time: string;
  badge?: AllColorsType;
  photo?: string;
  type:
    | "freeTimeTrue"
    | "freeTimeFalse"
    | "ConsultationTrue"
    | "ConsultationFalse";
};

export type ScheduleChildItemOptionsType = {
  backgroundColor: AllColorsType | undefined;
  largeTitleColor: AllColorsType;
  timeColor: AllColorsType;
};
