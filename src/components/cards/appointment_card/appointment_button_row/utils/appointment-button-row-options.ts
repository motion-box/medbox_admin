import { useMemo } from "react";
import { ButtonRowProps } from "../../../../buttons/button_row/button-row-type";
import { AppointmentButtonRowProps } from "./appointment-button-row-type";

export const useAppointmentButtonRowOptions = (
  props: AppointmentButtonRowProps
) => {
  const { photoUrl, title, titleicon, description, time, label } = props;

  const options = useMemo<ButtonRowProps>(() => {
    const foo: ButtonRowProps = {
      item: {
        photo: {
          url: photoUrl,
          size: "44",
          type: "round",
        },
      },
      leftContent: {
        title: {
          text: title,
          titleIcon: {
            iconName: titleicon,
            iconColor: "static_blue",
          },
        },
        description: description,
      },
      rightContent: {
        title: {
          text: time,
          description: label,
        },
      },
    };

    return foo;
  }, []);
  return options;
};
