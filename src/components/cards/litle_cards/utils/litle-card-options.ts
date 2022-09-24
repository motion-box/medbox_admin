import { useMemo } from "react";
import { LitleCardProps, LitleCardTypeOptions } from "./litle-card-type";

type ColorsType = {
  [key: string]: LitleCardTypeOptions;
};

let colors: ColorsType = {
  active: {
    textColor: "static_blue",
    fontWeight: 700,
  },
  notActive: {
    textColor: "static_black",
    fontWeight: 400,
  },
};

export const useLitleCardOptions = (
  props: LitleCardProps
): LitleCardTypeOptions => {
  const { type } = props;

  const options = useMemo<LitleCardTypeOptions>(() => {
    const foo: LitleCardTypeOptions = {
      textColor: colors[type].textColor,
      fontWeight: colors[type].fontWeight,
    };
    return foo;
  }, []);

  return options;
};
