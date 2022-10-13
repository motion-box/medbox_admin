import { useMemo } from "react";
import { ItemWrapProps, ItemWrapOptions } from "./item-wrap.type";

export const useItemWrapOptions = (props: ItemWrapProps): ItemWrapOptions => {
  const {
    isBadge,
    size,
    backgroundColor,
    borderRadius,
    borderColor,
    icon: iconProps,
    photo: photoProps,
  } = props;

  const options = useMemo<ItemWrapOptions>(() => {
    const container = {
      width: isBadge ? "4" : size || "30",
      height: isBadge ? "4" : size || "30",
      borderRadius: !borderRadius
        ? "100%"
        : borderRadius.includes("%")
        ? `${borderRadius}`
        : `${borderRadius}px`,
      backgroundColor: !photoProps ? backgroundColor : "dynamic_light_gray60",
      borderColor,
    };
    return {
      container,
    };
  }, []);

  return options;
};
