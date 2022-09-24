import ButtonRow from "../../components/buttons/button_row";
import CalendarRow from "../../components/calendar/calendar_row";
import LitleCard from "../../components/cards/litle_cards";
import CommonTitler from "../../components/navigations/titler/common_titler";
import { CommonTitlerProps } from "../../components/navigations/titler/common_titler/utils/common-titler-big";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import MainPageItems from "../../components/page_components/main_page_items";
import PanelItemWrapper from "../../components/page_components/panel_item_wrapper/inedx";
import { PanelItemWrapperProps } from "../../components/page_components/panel_item_wrapper/utils/panel-item-wrapper-type";
import RightPanel from "../../components/page_components/right_panel";
import TextProvider from "../../components/providers/text_provider";
import Container from "./style";

type DataType = PanelItemWrapperProps;

const data: DataType[] = [
  {
    id: 0,
    titler: "Материалы",
    titlerBtn: "Заказать",
    data: [
      {
        id: 0,
        title: "Стирильные подкладки",
        timeContainer: {
          label: "1 шт",
        },
      },
      {
        id: 1,
        title: "Записи",
        timeContainer: {
          label: "10 шт",
        },
      },
      {
        id: 2,
        title: "Ледокаин",
        timeContainer: {
          label: "34 мл",
        },
      },
      {
        id: 3,
        title: "Шприц 0.8 мл",
        timeContainer: {
          label: "242 шт",
        },
      },
      {
        id: 4,
        title: "Перчатки",
        timeContainer: {
          label: "300 шт",
        },
      },
      {
        id: 5,
        title: "Валерианка",
        timeContainer: {
          label: "535 шт",
        },
      },
      {
        id: 6,
        title: "Защитные очки",
        timeContainer: {
          label: "5436 шт",
        },
      },
    ],
  },
];

const MainPage = () => {
  return (
    <Container>
      <LayoutPage mainPage>
        <LeftPanel />
        <MainPageItems />
        <RightPanel>
          <div className="right-panel-item">
            <div className="record">
              <TextProvider
                options={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "static_black",
                }}
              >
                Виджеты
              </TextProvider>
            </div>
            {data.map((item, index) => (
              <PanelItemWrapper key={index} {...item}>
                {item.data.map((item) => (
                  <ButtonRow key={item.id} {...item} />
                ))}
              </PanelItemWrapper>
            ))}
          </div>
        </RightPanel>
      </LayoutPage>
    </Container>
  );
};

export default MainPage;
