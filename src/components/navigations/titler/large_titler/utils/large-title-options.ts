import { useMemo } from "react";
import { LargeTitleOptions, LargeTitleProps } from "./large-titler-type";

type LargeTitlerType = {
  [key: string]: LargeTitleOptions;
};

let types: LargeTitlerType = {
  big: {
    fontSizeTitle: 34,
    fontSizeDesc: 15,
    photoSize: "64",
    iconOptions: {
      width: undefined,
      height: undefined,
      color: undefined,
    },
  },
  middle: {
    fontSizeTitle: 17,
    fontSizeDesc: 12,
    photoSize: "44",
    iconOptions: {
      width: 30,
      height: 30,
      color: "dynamic_light_gray30",
    },
  },
};

export const useLargeTitlerOptionsType = (
  props: LargeTitleProps
): LargeTitleOptions => {
  const { type } = props;

  const options = useMemo<LargeTitleOptions>(() => {
    const foo: LargeTitleOptions = {
      fontSizeTitle: types[type].fontSizeTitle,
      fontSizeDesc: types[type].fontSizeDesc,
      photoSize: types[type].photoSize,
      iconOptions: types[type].iconOptions,
    };
    return foo;
  }, []);

  return options;
};
