import { MaterialButtonRowProps } from "./material-button-row-type";
import { useMemo } from "react";
import { ButtonRowProps } from "../../../../../buttons/button_row/button-row-type";

// TODO:fix icon

export const useMaterialButtonRowOptions = (props: MaterialButtonRowProps) => {
  const { title, description, icon } = props;

  const options = useMemo<ButtonRowProps>(() => {
    const foo: ButtonRowProps = {
      leftContent: {
        title: {
          text: title,
        },
      },
      rightContent: {
        title: {
          description: description,
        },
      },
    };

    return foo;
  }, []);
  return options;
};
