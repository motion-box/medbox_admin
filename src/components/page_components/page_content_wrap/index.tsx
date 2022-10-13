import Container from "./style";
import { PageContentWrapProps } from "./utils/page-content-wrap-type";

const PageContentWrap = (props: PageContentWrapProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default PageContentWrap;
