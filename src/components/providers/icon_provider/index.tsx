import React from "react";
import * as AllIcons from "../../resources/allIcons";
import Container from "./style";

interface Iprops extends AllIcons.IconProps {
  icon: AllIcons.AllIconsType;
}

const IconProvider = (props: Iprops) => {
  const { width, height, color, icon } = props;
  return (
    <Container>
      {React.createElement(AllIcons[icon], { width, height, color })}
    </Container>
  );
};

export default IconProvider;
