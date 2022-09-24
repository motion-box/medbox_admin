import NavButton from "../../../buttons/nav_button";
import ItemWrapProvider from "../../../providers/item_wrap_provider";
import TextProvider from "../../../providers/text_provider";
import Container from "./style";
import { useLargeTitlerOptionsType } from "./utils/large-title-options";
import { LargeTitleProps } from "./utils/large-titler-type";

const LargeTitle = (props: LargeTitleProps) => {
  const { title, description, photo, button } = props;

  const options = useLargeTitlerOptionsType(props);
  return (
    <Container {...options}>
      <div className="left-container">
        {photo && <ItemWrapProvider photo={photo} size={options.photoSize} />}
        <div className="title-container">
          <TextProvider
            options={{
              fontSize: options.fontSizeTitle,
              fontWeight: 700,
              color: "static_black",
            }}
          >
            {title}
          </TextProvider>
          <TextProvider
            options={{
              fontSize: options.fontSizeDesc,
              fontWeight: 400,
              color: "dynamic_light_gray60",
            }}
          >
            {description}
          </TextProvider>
        </div>
      </div>
      {button && (
        <NavButton
          onClick={() => "Playboi Carti"}
          icon={button.iconName}
          options={{
            iconOptions: options.iconOptions,
          }}
        />
      )}
    </Container>
  );
};

export default LargeTitle;
