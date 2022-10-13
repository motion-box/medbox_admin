import { useMemo } from "react";
import { ButtonRowProps } from "../../../../../buttons/button_row/button-row-type";
import { PrimaryButtonRowProps } from "./primary-button-row-type";

export const usePrimaryButtonRowOptions = (props: PrimaryButtonRowProps) => {
  const { title, description, rating, distace, photoUrl, onClick } = props;

  const options = useMemo<ButtonRowProps>(() => {
    const foo: ButtonRowProps = {
      onClick: onClick,
      item: {
        photo: {
          url: photoUrl,
          size: "56",
          type: "round",
        },
      },
      leftContent: {
        title: {
          text: title,
          titleIcon: {
            iconName: "VerifyBoldIcon",
            iconColor: "static_blue",
          },
        },
        description: description,
        bottom: {
          rating: {
            ratingIcon: "StarBoldIcon",
            ratingGrade: rating,
          },
          location: {
            locationIcon: "LocateBoldIcon",
            locationGrade: distace,
          },
        },
      },
      rightContent: {
        chevron: "ArrowRightBoldIcon",
      },
    };

    return foo;
  }, []);
  return options;
};
