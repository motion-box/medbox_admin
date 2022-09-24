import { useMemo } from "react";
import {
  ScheduleChildHeaderOptionsType,
  ScheduleChildHeaderProps,
} from "./shedule-child-header-type";

type ColorsType = {
  [key: string]: ScheduleChildHeaderOptionsType;
};

let colors: ColorsType = {
  inProcessFalse: {
    backgroundColor: undefined,
    week: "dynamic_light_gray60",
    weekBackgroundColor: undefined,
  },
  inProcessTrue: {
    backgroundColor: undefined,
    week: "static_white",
    weekBackgroundColor: "static_blue",
  },
  inProcessActive: {
    backgroundColor: "static_blue10",
    week: "static_blue",
    weekBackgroundColor: undefined,
  },
};

export const useScheduleChildHeaderOptions = (
  props: ScheduleChildHeaderProps
): ScheduleChildHeaderOptionsType => {
  const { type } = props;

  const options = useMemo<ScheduleChildHeaderOptionsType>(() => {
    const foo: ScheduleChildHeaderOptionsType = {
      backgroundColor: colors[type].backgroundColor,
      week: colors[type].week,
      weekBackgroundColor: colors[type].weekBackgroundColor,
    };
    return foo;
  }, []);

  return options;
};
