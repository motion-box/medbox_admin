import IconProvider from "../../providers/icon_provider";
import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Switch2 from "../switcher";
import { useButtonRowOptions } from "./button-row-options";
import { ButtonRowProps } from "./button-row-type";
import Container from "./style";

const ButtonRow = (props: ButtonRowProps) => {
  const { item, leftContent, rightContent, badge, borderBottom, onClick } =
    props;
  const options = useButtonRowOptions(props);
  return (
    <Container onClick={onClick}>
      {badge && (
        <ItemWrapProvider
          isBadge={true}
          backgroundColor={"static_red" || "static_blue"}
        />
      )}
      {options.item ? (
        <div className="avatar">
          {options.item.icon && <IconProvider {...options.item.icon} />}
          {options.item.iconWrap && (
            <ItemWrapProvider {...options.item.iconWrap} />
          )}
          {options.item.photo && <ItemWrapProvider {...options.item.photo} />}
        </div>
      ) : (
        <div />
      )}
      <div className="content">
        {options.leftContent && (
          <div className="left-content">
            {options.leftContent.leftContentIcon && (
              <IconProvider {...options.leftContent.leftContentIcon} />
            )}
            <div className="left-content-title">
              {options.leftContent.title && (
                <div className="left-content-title-top">
                  {options.leftContent.title.text && (
                    <TextProvider
                      options={{ ...options.leftContent.title.text }}
                    >
                      {leftContent?.title.text}
                    </TextProvider>
                  )}
                  {options.leftContent.title.titleIcon && (
                    <IconProvider {...options.leftContent.title.titleIcon} />
                  )}
                </div>
              )}
              {options.leftContent.description && (
                <TextProvider options={{ ...options.leftContent.description }}>
                  {leftContent?.description}
                </TextProvider>
              )}

              {options.leftContent.bottom && (
                <div className="left-content-bottom">
                  {options.leftContent.bottom.rating && (
                    <div className="rating">
                      {options.leftContent.bottom.rating.ratingIcon && (
                        <IconProvider
                          {...options.leftContent.bottom.rating.ratingIcon}
                        />
                      )}
                      <TextProvider
                        {...options.leftContent.bottom.rating.ratingGrade}
                      >
                        {leftContent?.bottom?.rating?.ratingGrade}
                      </TextProvider>
                    </div>
                  )}
                  {options.leftContent.bottom.rating && (
                    <div className="location">
                      {options.leftContent.bottom.location?.locationIcon && (
                        <IconProvider
                          {...options.leftContent.bottom.location.locationIcon}
                        />
                      )}
                      <TextProvider
                        {...options.leftContent.bottom.location?.locationGrade}
                      >
                        {leftContent?.bottom?.location?.locationGrade}
                      </TextProvider>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {options.rightContent && (
          <div className="right-content">
            {options.rightContent.title && (
              <div className="right-content-title">
                {options.rightContent.title.text && (
                  <TextProvider
                    options={{ ...options.rightContent.title.text }}
                  >
                    {rightContent?.title?.text}
                  </TextProvider>
                )}
                {options.rightContent.title.description && (
                  <TextProvider
                    options={{
                      ...options.rightContent.title.description,
                    }}
                  >
                    {rightContent?.title?.description}
                  </TextProvider>
                )}
              </div>
            )}
            {/* <Switch2 /> */}
            {options.rightContent.rightContentIcon && (
              <IconProvider {...options.rightContent.rightContentIcon} />
            )}
            {options.rightContent.chevron && (
              <IconProvider {...options.rightContent.chevron} />
            )}

            {options.rightContent.closeBtn && (
              <IconProvider {...options.rightContent.closeBtn} />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ButtonRow;
