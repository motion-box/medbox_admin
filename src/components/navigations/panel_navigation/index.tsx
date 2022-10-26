import { FC } from "react";
import SearchFiled from "../search_filed";
import CommonTitler from "../titler/common_titler";
import Container from "./style";
import { PanelNavigationProps } from "./utils/panel-navigation-type";

const PanelNavigation: FC<PanelNavigationProps> = ({ header, searchField }) => {
  return (
    <Container>
      <CommonTitler
        title={header.title}
        type="big"
        button={{
          iconName: header.button?.btnIcon,
          text: header.button?.btnText,
          color: "static_blue",
          isReverse: true,
        }}
      />
      <SearchFiled
        value={searchField.value}
        setValue={searchField.setValue}
        setSearching={searchField.setSearching}
        isSearching={searchField.isSearching}
      />
    </Container>
  );
};

export default PanelNavigation;
