import { useMemo } from "react";
import {
  ScheduleChildItemOptionsType,
  ScheduleChildProps,
} from "./schedule-child.type";

type ColorsType = {
  [key: string]: ScheduleChildItemOptionsType;
};

let colors: ColorsType = {
  freeTimeTrue: {
    largeTitleColor: "static_white",
    backgroundColor: "static_blue10",
    timeColor: "static_white",
  },
  freeTimeFalse: {
    largeTitleColor: "dynamic_light_gray30",
    backgroundColor: undefined,
    timeColor: "dynamic_light_gray60",
  },
  ConsultationTrue: {
    largeTitleColor: "static_white",
    backgroundColor: "static_blue",
    timeColor: "static_white",
  },
  ConsultationFalse: {
    largeTitleColor: "static_black",
    backgroundColor: undefined,
    timeColor: "dynamic_light_gray60",
  },
};

export const useScheduleChildItemOptions = (
  props: ScheduleChildProps
): ScheduleChildItemOptionsType => {
  const { type } = props;

  const options = useMemo<ScheduleChildItemOptionsType>(() => {
    const foo: ScheduleChildItemOptionsType = {
      largeTitleColor: colors[type].largeTitleColor,
      backgroundColor: colors[type].backgroundColor,
      timeColor: colors[type].timeColor,
    };
    return foo;
  }, []);

  return options;
};
