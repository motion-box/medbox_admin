import NavButton from "../../components/buttons/nav_button";
import LitleCard from "../../components/cards/litle_cards";
import LargeTitle from "../../components/navigations/titler/large_titler";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import RightPanel from "../../components/page_components/right_panel";
import SessionPageItems from "../../components/page_components/session_page_items";
import TextProvider from "../../components/providers/text_provider";
import Container from "./style";

const SessionPage = () => {
  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <SessionPageItems />
        <RightPanel button="s">
          <div className="navigation">
            <NavButton
              text="Назад"
              icon="ArrowLeftLinearIcon"
              onClick={() => "sad"}
              flexDirection
              options={{
                textOptions: {
                  fontSize: 17,
                  fontWeight: 400,
                  color: "static_blue",
                },
                iconOptions: {
                  width: 24,
                  height: 24,
                  color: "static_blue",
                },
              }}
            />
            <div className="number">
              <TextProvider
                options={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "static_black",
                }}
              >
                № 34 440
              </TextProvider>
            </div>
          </div>

          <div className="information">
            <LargeTitle
              type="big"
              photo="/avatar.webp"
              title="Ulugbek"
              description="Doctor"
            />
            <div className="card-wrap">
              <div className="litle-card">
                <LitleCard type="active" title="Очередь" counter="015" />
                <LitleCard type="notActive" title="комната" counter="244" />
                <LitleCard
                  type="notActive"
                  title="Длительность"
                  counter="40 мни"
                />
              </div>
              <div className="text">
                <TextProvider
                  options={{
                    fontSize: 17,
                    fontWeight: 400,
                    color: "static_black",
                  }}
                >
                  Клиника
                </TextProvider>
                <TextProvider
                  options={{
                    fontSize: 17,
                    fontWeight: 400,
                    color: "dynamic_light_gray60",
                  }}
                >
                  MEDION Family Hospital
                </TextProvider>
              </div>
            </div>
            <div className="descript">
              <TextProvider
                options={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "dynamic_light_gray60",
                }}
              >
                Необходимо првести оплату за услугу в течении дня.При неоплате,
                заявка будет отклонена
              </TextProvider>
            </div>
          </div>
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default SessionPage;
