import Container from "./style";
import { RightPanelProps } from "./utils/right-panel-type";

const RightPanel = (props: RightPanelProps) => {
  const { children, borderLeft, borderRight } = props;
  return (
    <Container borderLeft={borderLeft} borderRight={borderRight}>
      {children}
    </Container>
  );
};

export default RightPanel;
