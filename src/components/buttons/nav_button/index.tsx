import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { NavButtonProps } from "./utils/nav-button-type";

const NavButton = (props: NavButtonProps) => {
  const { text, icon, onClick } = props;

  return (
    <Container {...props} onClick={onClick}>
      {icon && <IconProvider {...props.options?.iconOptions} icon={icon} />}
      {text && (
        <TextProvider options={props.options?.textOptions}>{text}</TextProvider>
      )}
    </Container>
  );
};

export default NavButton;
