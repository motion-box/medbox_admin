import Container from "./style";

export type Iprops = {
  children: React.ReactNode;
};

const PageContentItemWrap = (props: Iprops) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default PageContentItemWrap;
