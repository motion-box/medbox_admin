import { useState } from "react";
import SearchFiled from "../../components/navigations/search_filed";
import SegmentedPicker from "../../components/navigations/segmented_picker";
import SegmentedPickerButton from "../../components/navigations/segmented_picker_button";
import { SegmentedPickerButtonProps } from "../../components/navigations/segmented_picker_button/utils/segment-picker-button";
import CommonTitler from "../../components/navigations/titler/common_titler";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import RightPanel from "../../components/page_components/right_panel";
import ChatButtonRow from "../../components/page_components/right_panel/right_panel_item/chat_button_row";
import { chatButtonRowData } from "../../components/resources/demo_data/right-panel-demo-data";
import ChatPageNavigation from "./navigation";

import Container from "./style";

const ChatPage = () => {
  return (
    <Container>
      <LayoutPage supportPage>
        <LeftPanel />
        <RightPanel borderLeft>
          <ChatPageNavigation />
          {chatButtonRowData.map((item) => (
            <ChatButtonRow key={item.id} {...item} />
          ))}
        </RightPanel>
        <PageContentWrap messengerWrap>sd</PageContentWrap>
      </LayoutPage>
    </Container>
  );
};

export default ChatPage;
