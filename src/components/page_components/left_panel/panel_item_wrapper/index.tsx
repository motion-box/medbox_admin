import TextProvider from "../../../providers/text_provider";
import Container from "./style";
import { PanelItemWrapperProps } from "./utils/panel-item-wrapper-type";

const PanelItemWrapper = (props: PanelItemWrapperProps) => {
  const { title, children } = props;
  return (
    <Container>
      {title && (
        <div className="header">
          <TextProvider
            options={{
              fontSize: 12,
              fontWeight: 400,
              color: "dynamic_light_gray60",
            }}
          >
            {title}
          </TextProvider>
        </div>
      )}
      <div className="item-container">{children}</div>
    </Container>
  );
};

export default PanelItemWrapper;
