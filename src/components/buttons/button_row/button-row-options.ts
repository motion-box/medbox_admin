import { ItemWrapProps } from "./../../providers/item_wrap_provider/utils/item-wrap.type";
import { useMemo } from "react";
import { ButtonRowProps } from "./button-row-type";
import { IconProviderProps } from "../../providers/icon_provider";
import { TextProviderOptions } from "../../providers/text_provider/utils/text-provider-type";

type ButtonRowOptions = {
  item?: ButtonRowOptionsItem;
  leftContent?: ButtonRowOptionsLeftContent;
  rightContent?: ButtonRowOptionsRightContent;
};

type ButtonRowOptionsItem = {
  icon?: IconProviderProps;
  iconWrap?: ItemWrapProps;
  photo?: ItemWrapProps;
};

type ButtonRowOptionsLeftContent = {
  leftContentIcon?: IconProviderProps;
  title?: {
    text: TextProviderOptions;
    titleIcon?: IconProviderProps;
  };
  description?: TextProviderOptions;
  bottom?: {
    rating?: {
      ratingIcon?: IconProviderProps;
      ratingGrade?: TextProviderOptions;
    };
    location?: {
      locationIcon?: IconProviderProps;
      locationGrade?: TextProviderOptions;
    };
  };
};

type ButtonRowOptionsRightContent = {
  title?: {
    text?: TextProviderOptions;
    description?: TextProviderOptions;
  };
  description?: TextProviderOptions;
  rightContentIcon?: IconProviderProps;
  chevron?: IconProviderProps;
  closeBtn?: IconProviderProps;
};

export const useButtonRowOptions = (
  props: ButtonRowProps
): ButtonRowOptions => {
  const { item, leftContent, rightContent, badge } = props;

  const options = useMemo<ButtonRowOptions>(() => {
    const itemOptions: ButtonRowOptionsItem | undefined = item
      ? {
          photo: item.photo
            ? {
                size: item.photo.size || "44",
                photo: item.photo.url,
                borderRadius: item.photo.type === "square" ? "8" : "100%",
              }
            : undefined,
          icon: item.icon
            ? {
                icon: item.icon,
                width: 24,
                height: 24,
                color: "dynamic_light_gray60",
              }
            : undefined,
          iconWrap: item.iconWrap
            ? {
                backgroundColor: item.iconWrap.backgroundColor || "static_blue",
                icon: {
                  name: item.iconWrap.iconName || "",
                  color: item.iconWrap.iconColor || "static_white",
                  width: 18,
                  height: 18,
                },
                borderRadius: "8",
                size: "30",
              }
            : undefined,
        }
      : undefined;

    const leftContentOptions: ButtonRowOptionsLeftContent | undefined =
      leftContent
        ? {
            leftContentIcon: leftContent.leftContentIcon
              ? {
                  icon:
                    leftContent.leftContentIcon.iconName || "CalendarBoldIcon",
                  width: 24,
                  height: 24,
                  color: leftContent.leftContentIcon.iconColor || "static_blue",
                }
              : undefined,
            title: leftContent.title
              ? {
                  text: {
                    fontSize: 17,
                    fontWeight: 400,
                    color: "static_black",
                  },
                  titleIcon: leftContent.title.titleIcon
                    ? {
                        icon:
                          leftContent.title.titleIcon?.iconName ||
                          "VerifyBoldIcon",
                        width: 16,
                        height: 16,
                        color:
                          leftContent.title.titleIcon?.iconColor ||
                          "static_blue",
                      }
                    : undefined,
                }
              : undefined,
            description: leftContent.description
              ? {
                  fontSize: 15,
                  fontWeight: 400,
                  color: "dynamic_light_gray60",
                }
              : undefined,
            bottom: leftContent.bottom
              ? {
                  rating: leftContent.bottom.rating
                    ? {
                        ratingIcon: {
                          icon:
                            leftContent.bottom.rating.ratingIcon ||
                            "StarBoldIcon",
                          width: 16,
                          height: 16,
                          color: "static_yellow",
                        },
                        ratingGrade: {
                          fontWeight: 400,
                          fontSize: 11,
                          color: "static_black",
                        },
                      }
                    : undefined,
                  location: leftContent.bottom.location
                    ? {
                        locationIcon: {
                          icon:
                            leftContent.bottom.location?.locationIcon ||
                            "LocateBoldIcon",
                          width: 16,
                          height: 16,
                          color: "static_purple",
                        },
                        locationGrade: {
                          fontSize: 11,
                          fontWeight: 400,
                          color: "static_black",
                        },
                      }
                    : undefined,
                }
              : undefined,
          }
        : undefined;

    const rightContentOptions: ButtonRowOptionsRightContent | undefined =
      rightContent
        ? {
            title: rightContent.title
              ? {
                  text: rightContent.title.text
                    ? {
                        fontSize: 17,
                        fontWeight: 400,
                        color: "static_black",
                      }
                    : undefined,
                  description: rightContent.title.description
                    ? {
                        fontSize: 15,
                        fontWeight: 400,
                        color: "dynamic_light_gray60",
                      }
                    : undefined,
                }
              : undefined,

            rightContentIcon: rightContent.rightContentIcon
              ? {
                  icon: rightContent.rightContentIcon.iconName,
                  width: 24,
                  height: 24,
                  color: rightContent.rightContentIcon.iconColor,
                }
              : undefined,
            chevron: rightContent.chevron
              ? {
                  icon: rightContent.chevron,
                  width: 18,
                  height: 18,
                  color: "dynamic_light_gray60",
                }
              : undefined,
            closeBtn: rightContent.closeBtn
              ? {
                  icon: rightContent.closeBtn.iconName,
                  width: 24,
                  height: 24,
                  color: rightContent.closeBtn.iconColor,
                }
              : undefined,
          }
        : undefined;
    return {
      item: itemOptions,
      leftContent: leftContentOptions,
      rightContent: rightContentOptions,
    };
  }, []);

  return options;
};
