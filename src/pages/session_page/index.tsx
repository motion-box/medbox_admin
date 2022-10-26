import { useRouter } from "next/router";
import { useMemo } from "react";
import MainButton from "../../components/buttons/main_button";
import AppointmentCardWrap from "../../components/cards/appointment_card_wrap";
import LitleCard from "../../components/cards/litle_cards";
import ProblemCardWrap from "../../components/cards/problem_card_wrap";
import CommonTitler from "../../components/navigations/titler/common_titler";
import LargeTitle from "../../components/navigations/titler/large_titler";
import MainTitler from "../../components/navigations/titler/main_titler";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import PageContentWrap from "../../components/page_components/page_content_wrap";
import RightPanel from "../../components/page_components/right_panel";
import MaterialButtonRow from "../../components/page_components/right_panel/right_panel_item/material_button_row";
import TextProvider from "../../components/providers/text_provider";
import {
  litleCardTypeData,
  AppointmentCardSessionDataToday,
  AppointmentCardSessionDataHistory,
  AppointmentCardSessionDataPlanned,
} from "../../components/resources/demo_data/session-page-data";
import Container from "./style";

const SessionPage = () => {
  const router = useRouter();

  const data = useMemo(() => {
    const filter = router.query.filter as string | undefined;

    switch (filter) {
      case "today":
        return AppointmentCardSessionDataToday;
      case "planned":
        return AppointmentCardSessionDataPlanned;

      case "history":
        return AppointmentCardSessionDataHistory;

      default:
        return AppointmentCardSessionDataToday;
    }
  }, [router.query.filter]);

  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <PageContentWrap mainWrap>
          <div className="session-title">
            <CommonTitler
              type="big"
              title="Записи"
              button={{
                text: "Календарь",
                iconName: "CalendarLinearIcon",
                color: "static_blue",
                isReverse: true,
              }}
            />
          </div>
          <ProblemCardWrap />
          <AppointmentCardWrap data={data} />
        </PageContentWrap>
        <RightPanel borderLeft="dynamic_light_stroke">
          <MainTitler
            title="№ 34 440"
            button={{
              leftButton: {
                text: "Назад",
                iconName: "ArrowLeftLinearIcon",
                color: "static_blue",
              },
            }}
          />
          <div className="right-panel-item">
            <div className="item-wrap">
              <LargeTitle
                type="big"
                photo="/monica.jpeg"
                title="Hi"
                description="description"
              />
              <div className="card-wrap">
                <div className="appointment-card">
                  <div className="litle-card-wrap">
                    {litleCardTypeData.map((item) => (
                      <LitleCard key={item.id} {...item} />
                    ))}
                  </div>
                  <MaterialButtonRow
                    title="Клиника"
                    description="MEDION Family Hospital"
                  />
                </div>
                <div className="text">
                  <TextProvider
                    options={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "dynamic_light_gray60",
                    }}
                  >
                    Необходио провести оплату за услугу в течении дня. При
                    неоплате, заявка будет отклонена
                  </TextProvider>
                </div>
              </div>
            </div>
          </div>
          <MainButton
            backgroundColor="static_blue"
            onClick={() => "click"}
            text="Запросить доступ"
            options={{
              textOptions: {
                fontSize: 17,
                fontWeight: 700,
                color: "static_white",
              },
            }}
          />
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default SessionPage;
