import AppointmentButtonRow from "../../components/cards/appointment_card/appointment_button_row";
import LitleCard from "../../components/cards/litle_cards";
import ProblemCard from "../../components/cards/problem_card";
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
  AppointmentCardData,
  litleCardTypeData,
  problemCardData,
} from "../../components/resources/demo_data/session-page-data";
import Container from "./style";

const SessionPage = () => {
  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <PageContentWrap mainWrap>
          <div className="title">
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
          <div className="problem-card">
            {problemCardData.map((item) => (
              <ProblemCard key={item.id} {...item} />
            ))}
          </div>
          <div className="appointment-card-wrap">
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
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default SessionPage;
