import Router from "next/router";
import { useState } from "react";
import { data } from "../../resources/demo_data/left-panel-data";
import Container from "./style";
import SearchFiled from "../../navigations/search_filed";
import CommonTitler from "../../navigations/titler/common_titler";
import PrimaryButtonRow from "./left_panel_buttons/primary_button_row";
import SettingsButtonRow from "./left_panel_buttons/settings_button";
import PanelItemWrapper from "./panel_item_wrapper";

const LeftPanel = () => {
  const [value, setValue] = useState("");
  const [isSearching, setSearching] = useState(false);
  return (
    <Container>
      <div className="navigation-container">
        <CommonTitler type="big" title="MEDBOX" />
        <SearchFiled
          isSearching={isSearching}
          setSearching={setSearching}
          value={value}
          setValue={setValue}
        />
      </div>
      {data.map((item, index) => (
        <PanelItemWrapper key={index} {...item}>
          {item.data?.map((item) => (
            <PrimaryButtonRow key={item.id} {...item} />
          ))}
          {item.settingsBtnData?.map((item) => (
            <SettingsButtonRow
              onClick={() => Router.push(item.route || "#")}
              key={item.id}
              {...item}
            />
          ))}
        </PanelItemWrapper>
      ))}
    </Container>
  );
};

export default LeftPanel;
