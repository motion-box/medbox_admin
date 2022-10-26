import NavButton from "../../../buttons/nav_button";
import TextProvider from "../../../providers/text_provider";
import Container from "./style";
import { MainTitlerProps } from "./utils/main-titler-type";

const MainTitler = (props: MainTitlerProps) => {
  const { title, button } = props;
  return (
    <Container>
      {button?.leftButton && (
        <NavButton
          text={button.leftButton?.text}
          icon={button.leftButton?.iconName}
          onClick={() => "Back"}
          options={{
            textOptions: {
              fontSize: 17,
              fontWeight: 400,
              color: button.leftButton?.color || "static_blue",
            },
            iconOptions: {
              width: 24,
              height: 24,
              color: button.leftButton?.color || "static_blue",
            },
          }}
        />
      )}
      <div />
      <div className="title-text">
        <TextProvider
          options={{
            fontSize: 17,
            fontWeight: 700,
            color: "static_black",
          }}
        >
          {title}
        </TextProvider>
      </div>
      {button?.rightButton && (
        <NavButton
          text={button.rightButton?.text}
          icon={button.rightButton?.iconName}
          isReverse
          onClick={() => "Back"}
          options={{
            textOptions: {
              fontSize: 17,
              fontWeight: 400,
              color: button.rightButton?.color || "static_blue",
            },
            iconOptions: {
              width: 24,
              height: 24,
              color: button.rightButton?.color || "static_blue",
            },
          }}
        />
      )}
    </Container>
  );
};

export default MainTitler;
