import React from "react";
import * as AllIcons from "../../resources/all_icons/allIcons";
import Container from "./style";

export type IconProviderProps = AllIcons.IconProps & {
  icon: AllIcons.AllIconsType;
};

const IconProvider = (props: IconProviderProps) => {
  const { width, height, color, icon } = props;
  return (
    <Container>
      {React.createElement(AllIcons[icon], { width, height, color })}
    </Container>
  );
};

export default IconProvider;
