import { useCallback, useState } from "react";
import dayjs from "dayjs";
import Container from "./style";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import RightPanel from "../../components/page_components/right_panel";
import RightPanelItem from "../../components/page_components/right_panel/right_panel_item";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import LargeTitle from "../../components/navigations/titler/large_titler";
import MainTitler from "../../components/navigations/titler/main_titler";
import { AppointmentCardDemoData } from "../../components/resources/demo_data/main-page-data";
import AppointmentCardWrap from "../../components/cards/appointment_card_wrap";

const MainPage = () => {
  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <PageContentWrap mainWrap>
          <div className="title-wrapper">
            <LargeTitle type="big" title="Главная" />
          </div>
          <div className="graph" />
          <AppointmentCardWrap data={AppointmentCardDemoData} />
        </PageContentWrap>
        <RightPanel borderLeft="dynamic_light_stroke">
          <MainTitler title="Виджеты" />
          <RightPanelItem />
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default MainPage;
