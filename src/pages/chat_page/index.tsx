import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import RightPanel from "../../components/page_components/right_panel";
import ChatButtonRow from "../../components/page_components/right_panel/right_panel_item/chat_button_row";
import { chatButtonRowData } from "../../components/resources/demo_data/right-panel-demo-data";
import ChatPageNavigation from "./top_navigation";
import Container from "./style";

const ChatPage = () => {
  return (
    <Container>
      <LayoutPage supportPage>
        <LeftPanel />
        <RightPanel borderRight="dynamic_light_stroke">
          <ChatPageNavigation />
          <div className="scroll-item">
            {chatButtonRowData.map((item) => (
              <ChatButtonRow key={item.id} {...item} />
            ))}
          </div>
        </RightPanel>
        <PageContentWrap messengerWrap>чат</PageContentWrap>
      </LayoutPage>
    </Container>
  );
};

export default ChatPage;
