import Container from "./style";
import { RightPanelProps } from "./utils/right-panel-type";

const RightPanel = (props: RightPanelProps) => {
  const { children, borderLeft } = props;
  return <Container borderLeft={borderLeft}>{children}</Container>;
};

export default RightPanel;
