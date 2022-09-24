import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { NavButtonProps } from "./utils/nav-button-type";

const NavButton = (props: NavButtonProps) => {
  const { text, icon, onClick, flexDirection, backgroundColor } = props;
  return (
    <Container
      backgroundColor={backgroundColor}
      {...props}
      onClick={onClick}
      flexDirection={flexDirection}
    >
      {icon ? (
        <IconProvider {...props.options?.iconOptions} icon={icon} />
      ) : null}
      {text && (
        <TextProvider options={props.options?.textOptions}>{text}</TextProvider>
      )}
    </Container>
  );
};

export default NavButton;
