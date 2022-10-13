import { LayoutPageProps } from "./utils/page-layout-type";
import Container from "./style";

const LayoutPage = (props: LayoutPageProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default LayoutPage;
