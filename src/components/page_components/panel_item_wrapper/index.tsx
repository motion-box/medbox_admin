import CommonTitler from "../../navigations/titler/common_titler";
import TextProvider from "../../providers/text_provider";
import Container from "./style";
import { PanelItemWrapperProps } from "./utils/panel-item-wrapper-type";

const PanelItemWrapper = (props: PanelItemWrapperProps) => {
  const { title, children, titler, titlerBtn } = props;
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
      {titler && (
        <div className="titler">
          <CommonTitler
            type="middle"
            title={titler}
            button={{
              text: props.titlerBtn,
              iconName: "ArrowRightBoldIcon",
            }}
          />
        </div>
      )}

      <div className="item-container">{children}</div>
    </Container>
  );
};

export default PanelItemWrapper;
