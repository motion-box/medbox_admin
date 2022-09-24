import IconProvider from "../../providers/icon_provider";
import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import { AllIconsType } from "../../resources/allIcons";
import { AllColorsType } from "../../resources/colorPalet";
import Container from "./style";

// TODO: change all

export type ButtonRowPropsDemo = {
  title: string;
  description?: string;
  badge?: true | AllColorsType;
  photo?: string;
  verifyIcon?: string;
  titleIcon?: AllIconsType;
  titleBottomLeft?: string;
  timeContainer?: {
    time?: string;
    label?: string;
  };
  TickLinearIcon?: string;
  arrow?: AllIconsType;
  backgroundColor?: AllColorsType;
  onClick?: () => void;
  route?: string;
};

const ButtonRow = (props: ButtonRowPropsDemo) => {
  const {
    title,
    description,
    badge,
    photo,
    titleIcon,
    titleBottomLeft,
    timeContainer,
    TickLinearIcon,
    verifyIcon,
    arrow,
    backgroundColor,
    onClick,
    route,
  } = props;
  return (
    <Container onClick={onClick} {...props}>
      {badge && (
        <div className="badge">
          <ItemWrapProvider backgroundColor="static_red" isBadge={true} />
        </div>
      )}
      <div className="icon-container">
        {titleIcon && (
          <ItemWrapProvider
            icon={{
              name: titleIcon,
              color: "static_white",
            }}
            backgroundColor="static_blue"
            borderRadius="8"
          />
        )}
        {photo && <ItemWrapProvider photo={photo} size="56" />}
      </div>
      <div className="content-container">
        <div className="left-content-container">
          <span className="title-container">
            <div className="title-top-container">
              <TextProvider
                options={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "dynamic_light_text",
                }}
              >
                {title}
              </TextProvider>
              {verifyIcon && (
                <IconProvider icon="VerifyBoldIcon" color="static_blue" />
              )}
            </div>
            <TextProvider
              options={{
                fontSize: 12,
                fontWeight: 400,
                color: "dynamic_light_gray60",
              }}
            >
              {description}
            </TextProvider>
            {titleBottomLeft && (
              <div className="title-bottom-container">
                <div className="title-bottom-left-container">
                  <IconProvider
                    icon="StarBoldIcon"
                    color="static_yellow"
                    width={16}
                    height={16}
                  />
                  <TextProvider
                    options={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "dynamic_light_text",
                    }}
                  >
                    4.5
                  </TextProvider>
                </div>
                <div className="title-bottom-right-container">
                  <IconProvider
                    icon="LocateBoldIcon"
                    color="static_purple"
                    width={16}
                    height={16}
                  />
                  <TextProvider
                    options={{
                      fontSize: 11,
                      fontWeight: 400,
                      color: "dynamic_light_text",
                    }}
                  >
                    4.5
                  </TextProvider>
                </div>
              </div>
            )}
          </span>
        </div>

        <div className="right-content-container">
          {timeContainer && (
            <div className="time-container">
              <TextProvider
                options={{
                  fontSize: 17,
                  fontWeight: 400,
                  color: "dynamic_light_text",
                }}
              >
                {timeContainer.time}
              </TextProvider>
              <TextProvider
                options={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "dynamic_light_gray60",
                }}
              >
                {timeContainer.label}
              </TextProvider>
            </div>
          )}

          {TickLinearIcon && (
            <IconProvider
              icon="TickLinearIcon"
              color="static_blue"
              width={24}
              height={24}
            />
          )}
          {arrow && (
            <IconProvider
              icon={arrow}
              color="dynamic_light_gray60"
              width={18}
              height={18}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default ButtonRow;
