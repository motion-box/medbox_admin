import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { MainButtonProps } from "./utils/main-button-type";

const MainButton = (props: MainButtonProps) => {
  const { options, onClick, text, icon, backgroundColor } = props;
  return (
    <Container backgroundColor={backgroundColor} {...options} onClick={onClick}>
      {icon && <IconProvider {...options?.iconOptions} icon={icon} />}
      {text && (
        <TextProvider options={options?.textOptions}>{text}</TextProvider>
      )}
    </Container>
  );
};

export default MainButton;
