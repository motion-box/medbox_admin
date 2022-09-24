import ButtonRow, { ButtonRowPropsDemo } from "../../buttons/button_row";
import SearchFiled from "../../navigations/search_filed";
import CommonTitler from "../../navigations/titler/common_titler";
import PanelItemWrapper from "../panel_item_wrapper/inedx";
import { PanelItemWrapperProps } from "../panel_item_wrapper/utils/panel-item-wrapper-type";
import Container from "./style";

type asds = {
  asd: string;
} & ButtonRowPropsDemo;

type DataType = PanelItemWrapperProps;

const data: DataType[] = [
  {
    id: 0,
    data: [
      {
        id: 0,
        title: "Anastasiya Victorovna",
        description: "Кардиолог, терапевт",
        photo: "/avatar.webp",
        titleBottomLeft: "s",
        verifyIcon: "s",
        arrow: "ArrowRightLinearIcon",
      },
      {
        id: 1,
        title: "MEDION Family hospital",
        description: "Истирохат 258",
        photo: "/avatar.webp",
        titleBottomLeft: "s",
        arrow: "ArrowRightLinearIcon",
      },
    ],
  },
  {
    id: 1,
    title: "ГЛАВНОЕ",
    data: [
      {
        id: 0,
        title: "Дашборд",
        titleIcon: "DashboardBoldIcon",
        arrow: "ArrowRightLinearIcon",
      },
      {
        id: 1,
        title: "Записи",
        titleIcon: "TicketBoldIcon",
        badge: true,
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "4",
        },
      },
      {
        id: 2,
        title: "Чаты",
        titleIcon: "MessageBoldIcon",
        badge: true,
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "13",
        },
      },
      {
        id: 4,
        title: "Почта",
        titleIcon: "SmsBoldIcon",
        badge: true,
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "22",
        },
      },
    ],
  },
  {
    id: 2,
    title: "ИНСТРУМЕНТЫ",
    data: [
      {
        id: 0,
        title: "Материалы",
        titleIcon: "GlovesBoldIcon",
        arrow: "ArrowRightLinearIcon",
      },
      {
        id: 1,
        title: "Оборудование",
        titleIcon: "MicroscopeBoldIcon",
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "4",
        },
      },
      {
        id: 2,
        title: "Заявки",
        titleIcon: "BoxBoldIcon",
        arrow: "ArrowRightLinearIcon",
        badge: true,
        timeContainer: {
          label: "13",
        },
      },
    ],
  },
  {
    id: 3,
    title: "НАСТРОЙКИ",
    data: [
      {
        id: 0,
        title: "Уведомления",
        titleIcon: "NotificationBoldIcon",
        arrow: "ArrowRightLinearIcon",
      },
      {
        id: 1,
        title: "Безопасность",
        titleIcon: "LockBoldIcon",
        arrow: "ArrowRightLinearIcon",
      },
      {
        id: 2,
        title: "Оформление",
        titleIcon: "MaskBoldIcon",
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "Светлая",
        },
      },
      {
        id: 3,
        title: "Язык",
        titleIcon: "GlobalBoldIcon",
        arrow: "ArrowRightLinearIcon",
        timeContainer: {
          label: "Русский",
        },
      },
    ],
  },
];

const LeftPanel = () => {
  return (
    <Container>
      <div className="navigation-container">
        <CommonTitler type="big" title="MEDBOX" />
        <SearchFiled />
      </div>
      {data.map((item, index) => (
        <PanelItemWrapper key={index} {...item}>
          {item.data.map((item) => (
            <ButtonRow key={item.id} {...item} />
          ))}
        </PanelItemWrapper>
      ))}
    </Container>
  );
};

export default LeftPanel;
