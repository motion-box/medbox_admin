import NavButton from "../../../buttons/nav_button";
import TextProvider from "../../../providers/text_provider";
import { MainTitlerProps } from "./main-titler-type";
import Container from "./style";

const MainTitler = (props: MainTitlerProps) => {
  const { title, leftButton, rightButton, photo, btnIconName, btnText } = props;

  return (
    <Container>
      {leftButton && (
        <NavButton
          text={btnText}
          icon={btnIconName}
          flexDirection
          onClick={() => "sad"}
        />
      )}

      {title && (
        <div className="text-container">
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
      )}
      {rightButton && (
        <NavButton
          text={btnText}
          icon={btnIconName}
          onClick={() => "sad"}
          options={{
            textOptions: {
              color: "static_blue",
            },
            iconOptions: {
              color: "static_blue",
            },
          }}
        />
      )}
    </Container>
  );
};

export default MainTitler;
