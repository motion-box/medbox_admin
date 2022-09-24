import { useMemo } from "react";
import {
  CalendarHeaderOptionsType,
  CalendarHeaderProps,
} from "./calendar-header-type";

type ColorsType = {
  [key: string]: CalendarHeaderOptionsType;
};

let colors: ColorsType = {
  usual: {
    backgroundColor: undefined,
    btnBackgroundColor: "dynamic_light_bg",
  },
  unusual: {
    backgroundColor: "dynamic_light_stroke",
    btnBackgroundColor: "static_white",
  },
};

export const useCalendarHeaderOptionsType = (
  props: CalendarHeaderProps
): CalendarHeaderOptionsType => {
  const { type } = props;

  const options = useMemo<CalendarHeaderOptionsType>(() => {
    const foo: CalendarHeaderOptionsType = {
      backgroundColor: colors[type].backgroundColor,
      btnBackgroundColor: colors[type].btnBackgroundColor,
    };
    return foo;
  }, []);

  return options;
};
