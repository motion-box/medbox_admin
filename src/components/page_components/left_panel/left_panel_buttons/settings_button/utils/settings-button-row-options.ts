import { useMemo } from "react";
import { ButtonRowProps } from "../../../../../buttons/button_row/button-row-type";
import { SettingsButtonRowProps } from "./settings-button-row-type";

export const useSettingsButtonRowOptions = (props: SettingsButtonRowProps) => {
  const { title, icon, notification, onClick } = props;

  const options = useMemo<ButtonRowProps>(() => {
    const foo: ButtonRowProps = {
      onClick: onClick,
      item: {
        iconWrap: {
          iconName: props.icon,
          iconColor: "static_white",
          backgroundColor: "static_blue",
        },
      },
      leftContent: {
        title: {
          text: props.title,
        },
      },
      rightContent: {
        title: {
          description: props.notification,
        },
        chevron: "ArrowRightBoldIcon",
      },
    };

    return foo;
  }, []);
  return options;
};
