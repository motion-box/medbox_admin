import { LayoutPageProps } from "./page-layout-type";
import Container from "./style";

const LayoutPage = (props: LayoutPageProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default LayoutPage;
