import { MainButtonModel } from "../../../models/buttonModel";
import IconProvider from "../../providers/icon_provider";
import TextProvider from "../../providers/text_provider";
import Container from "./style";

interface Iprops extends MainButtonModel {}

const MainButton = (props: Iprops) => {
  const { options, onClick, text, icon } = props;
  return (
    <Container {...options} onClick={onClick}>
      {icon && <IconProvider {...options?.iconOptions} icon={icon} />}
      {text && (
        <TextProvider options={options?.textOptions}>{text}</TextProvider>
      )}
    </Container>
  );
};

export default MainButton;
