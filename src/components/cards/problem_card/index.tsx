import IconProvider from "../../providers/icon_provider";
import ItemWrapProvider from "../../providers/item_wrap_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { ProblemCardProps } from "./utils/problem-card-type";

const ProblemCard = (props: ProblemCardProps) => {
  const { title, number, icon, iconWrap, backgroundColor } = props;
  return (
    <Container backgroundColor={backgroundColor}>
      <div className="top-container">
        {iconWrap && (
          <ItemWrapProvider
            borderRadius="8"
            backgroundColor={iconWrap.iconBackgorund}
            icon={{
              name: iconWrap.iconName,
              color: iconWrap.iconColor,
            }}
          />
        )}
        {icon && (
          <IconProvider
            icon={icon.iconName}
            color={icon.iconColor}
            width={36}
            height={36}
          />
        )}
        <TextProvider
          options={{
            fontSize: 22,
            fontWeight: 700,
            color: "static_black",
          }}
        >
          {number}
        </TextProvider>
      </div>

      <TextProvider
        options={{
          fontSize: 17,
          fontWeight: 400,
          color: "dynamic_light_gray60",
        }}
      >
        {title}
      </TextProvider>
    </Container>
  );
};

export default ProblemCard;
