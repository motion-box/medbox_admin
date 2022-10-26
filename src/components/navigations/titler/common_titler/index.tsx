import NavButton from "../../../buttons/nav_button";
import ItemWrapProvider from "../../../providers/item_wrap_provider";
import TextProvider from "../../../providers/text_provider";
import Container from "./style";
import { CommonTitlerProps } from "./utils/common-titler-type";
import { useCommonTitlerOptionsType } from "./utils/common-titler-options";

const CommonTitler = (props: CommonTitlerProps) => {
  const { title, photo, button } = props;
  const options = useCommonTitlerOptionsType(props);
  return (
    <Container {...options}>
      <div className="left-container">
        <div className="title-container">
          <TextProvider options={options.textOptions}>{title}</TextProvider>
        </div>
      </div>
      <div className="right-container">
        {photo && <ItemWrapProvider photo="/avatar.webp" size="32" />}
        {button ? (
          <NavButton
            text={button.text}
            icon={button.iconName}
            isReverse={button.isReverse}
            onClick={() => "Click"}
            options={options.buttonOptions}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default CommonTitler;
