import { useMemo } from "react";
import {
  CommonTitlerOptionsType,
  CommonTitlerProps,
} from "./common-titler-type";

type CommonTitlerType = {
  [key: string]: CommonTitlerOptionsType;
};

let types: CommonTitlerType = {
  big: {
    textOptions: {
      fontWeight: 700,
      fontSize: 34,
      color: "static_black",
    },
    buttonOptions: {
      textOptions: {
        fontSize: 17,
        fontWeight: 400,
        color: "static_blue",
      },
      iconOptions: {
        width: 24,
        height: 24,
        color: "static_blue",
      },
    },
  },
  middle: {
    textOptions: {
      fontWeight: 600,
      fontSize: 20,
      color: "static_black",
    },
    buttonOptions: {
      textOptions: {
        fontSize: 15,
        fontWeight: 400,
        color: "dynamic_light_gray60",
      },
      iconOptions: {
        width: 16,
        height: 16,
        color: "dynamic_light_gray60",
      },
    },
  },
};

export const useCommonTitlerOptionsType = (
  props: CommonTitlerProps
): CommonTitlerOptionsType => {
  const { type, button } = props;

  const options = useMemo<CommonTitlerOptionsType>(() => {
    const foo: CommonTitlerOptionsType = {
      textOptions: types[type].textOptions,
      buttonOptions: button?.color
        ? {
            textOptions: {
              ...types[type].buttonOptions.textOptions,
              color: button.color,
            },
            iconOptions: {
              ...types[type].buttonOptions.iconOptions,
              color: button.color,
            },
          }
        : types[type].buttonOptions,
    };
    return foo;
  }, []);

  return options;
};
