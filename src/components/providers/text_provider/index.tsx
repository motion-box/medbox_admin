import React from "react";
import { TextProviderModel } from "./utils/text-provider-type";

interface Iprops extends TextProviderModel {}

const TextProvider = (props: Iprops) => {
  const { type, children, options } = props;

  return React.createElement(
    `${type || "span"}`,
    {
      style: {
        fontSize: options?.fontSize || 16,
        fontWeight: options?.fontWeight || 400,
        color: `var(--${options?.color || "static_black"})`,
      },
    },
    children
  );
};

export default TextProvider;
