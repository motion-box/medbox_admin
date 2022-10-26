import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import RightPanel from "../../components/page_components/right_panel";
import ChatButtonRow from "../../components/page_components/right_panel/right_panel_item/chat_button_row";
import { chatSupportButtonRowData } from "../../components/resources/demo_data/right-panel-demo-data";
import ChatPageNavigation from "./top_navigation";
import Container from "./style";
import MainTitler from "../../components/navigations/titler/main_titler";

const MailPage = () => {
  return (
    <Container>
      <LayoutPage supportPage>
        <LeftPanel />
        <RightPanel borderRight="dynamic_light_stroke">
          <ChatPageNavigation />
          <div className="scroll-item">
            {chatSupportButtonRowData.map((item) => (
              <ChatButtonRow key={item.id} {...item} />
            ))}
          </div>
        </RightPanel>
        <PageContentWrap messengerWrap>
          <MainTitler
            title="MEDBOX Support"
            button={{
              leftButton: {
                iconName: "ArrowLeftLinearIcon",
                text: "Назад",
                color: "static_blue",
              },
              rightButton: {
                iconName: "SmsEditLinearIcon",
                text: "Ответить",
                color: "static_blue",
              },
            }}
          />
        </PageContentWrap>
      </LayoutPage>
    </Container>
  );
};

export default MailPage;
