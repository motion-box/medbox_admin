import { useMemo } from "react";
import { DigitOptionsType, DigitProps } from "./digit-type";

type ColorsType = {
  [key: string]: DigitOptionsType;
};

let colors: ColorsType = {
  activeDay: {
    backgroundColor: "static_blue",
    numberColor: "static_white",
    borderColor: undefined,
  },
  pastDay: {
    backgroundColor: undefined,
    numberColor: "dynamic_light_gray30",
    borderColor: undefined,
  },
  dayOff: {
    backgroundColor: "dynamic_light_stroke",
    numberColor: "dynamic_light_gray30",
    borderColor: undefined,
  },
  comingDay: {
    backgroundColor: undefined,
    numberColor: "dynamic_dark_bg1",
    borderColor: undefined,
  },
  guidance: {
    backgroundColor: undefined,
    numberColor: "static_black",
    borderColor: "static_blue",
  },
};

export const useDigitOptions = (props: DigitProps): DigitOptionsType => {
  const { type } = props;

  const options = useMemo<DigitOptionsType>(() => {
    const foo: DigitOptionsType = {
      backgroundColor: colors[type].backgroundColor,
      numberColor: colors[type].numberColor,
      borderColor: colors[type].borderColor,
    };
    return foo;
  }, []);

  return options;
};
