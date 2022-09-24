import MainButton from "../../buttons/main_button";
import Container from "./style";
import { RightPanelProps } from "./utils/right-panel-type";

const RightPanel = (props: RightPanelProps) => {
  const { children, title, button } = props;
  return (
    <Container>
      <div className="item-container">{children}</div>
      {button && (
        <div className="button">
          <MainButton
            onClick={() => "sad"}
            text="Запросить доступ"
            options={{
              width: "100%",
              height: 48,
              backgroundColor: "static_blue",
              textOptions: {
                fontSize: 17,
                fontWeight: 700,
                color: "static_white",
              },
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default RightPanel;
