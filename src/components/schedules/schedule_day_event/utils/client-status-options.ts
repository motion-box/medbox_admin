import { useMemo } from "react";
import {
  ClientStatusOptionsType,
  ClientStatusProps,
} from "./client-status.type";

type ColorsType = {
  [key: string]: ClientStatusOptionsType;
};

let colors: ColorsType = {
  lose: {
    textColor: "static_red",
    backgroundColor: "static_red30",
    color: "static_red50",
  },
  active: {
    textColor: "static_orange",
    backgroundColor: "static_orange30",
    color: "static_orange50",
  },
  warning: {
    textColor: "static_orange",
    backgroundColor: "static_orange30",
    color: "static_orange50",
  },
  reserved: {
    textColor: "static_blue",
    backgroundColor: "static_blue30",
    color: "static_blue30",
  },
  service: {
    textColor: "static_purple",
    backgroundColor: "static_purple30",
    color: "static_purple50",
  },
};

export const useClientStatusOptions = (
  props: ClientStatusProps
): ClientStatusOptionsType => {
  const { time, type } = props;

  const options = useMemo<ClientStatusOptionsType>(() => {
    const foo: ClientStatusOptionsType = {
      color: colors[type].color,
      backgroundColor: colors[type].backgroundColor,
      textColor: colors[type].textColor,
    };
    return foo;
  }, []);

  return options;
};
