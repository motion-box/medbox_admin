import Container from "./style";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import RightPanel from "../../components/page_components/right_panel";
import RightPanelItem from "../../components/page_components/right_panel/right_panel_item";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import LargeTitle from "../../components/navigations/titler/large_titler";
import MainTitler from "../../components/navigations/titler/main_titler";
import CommonTitler from "../../components/navigations/titler/common_titler";
import AppointmentButtonRow from "../../components/cards/appointment_card/appointment_button_row";
import LitleCard from "../../components/cards/litle_cards";
import { AppointmentCardData } from "../../components/resources/demo_data/main-page-data";

const MainPage = () => {
  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <PageContentWrap mainWrap>
          <div className="title">
            <LargeTitle type="big" title="Главная" />
          </div>
          <div className="graph" />
          <div className="appointment-wrap">
            {AppointmentCardData.map((item) => (
              <div key={item.id} className="appointment-content-wrap">
                {item.titlerdata?.map((item) => (
                  <CommonTitler key={item.id} {...item} />
                ))}
                <div className="button-wrap">
                  {item.buttonRowData.map((item) => (
                    <AppointmentButtonRow key={item.id} {...item} />
                  ))}
                  <div className="card-wrap">
                    {item.litleCardData.map((item) => (
                      <LitleCard key={item.id} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageContentWrap>
        <RightPanel>
          <MainTitler title="Виджеты" />
          <RightPanelItem />
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default MainPage;
