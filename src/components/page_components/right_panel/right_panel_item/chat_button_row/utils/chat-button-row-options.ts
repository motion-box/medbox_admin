import { useMemo } from "react";
import { ButtonRowProps } from "../../../../../buttons/button_row/button-row-type";
import { ChatButtonRowProps } from "./chat-button-row-type";

export const useChatButtonRowOptions = (props: ChatButtonRowProps) => {
  const { title, description, rating, photoUrl, onClick, notification } = props;

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
        },
        description: description,
        bottom: {
          rating: {
            ratingIcon: "StarBoldIcon",
            ratingGrade: rating,
          },
        },
      },
      rightContent: {
        title: {
          description: notification,
        },
        chevron: "ArrowRightBoldIcon",
      },
    };

    return foo;
  }, []);
  return options;
};
