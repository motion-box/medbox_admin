import { PanelItemWrapperProps } from "../../page_components/left_panel/panel_item_wrapper/utils/panel-item-wrapper-type";

type DataType = PanelItemWrapperProps;

export const data: DataType[] = [
  {
    id: 0,
    data: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monicca Bellucci",
        description: "Кардиолог",
        distace: "4 км",
        rating: "7",
      },
      {
        id: 1,
        photoUrl: "/logo.png",
        title: "MEDION Family Hospital",
        description: "Сергели 251",
        distace: "17 км",
        rating: "7",
      },
    ],
  },
  {
    id: 1,
    title: "Главное",
    settingsBtnData: [
      {
        id: 0,
        icon: "DashboardBoldIcon",
        title: "Дашбоард",
        route: "/",
      },
      {
        id: 1,
        icon: "TicketBoldIcon",
        title: "Записи",
        route: "/session_page",
      },
      {
        id: 2,
        icon: "MessageBoldIcon",
        title: "Чаты",
        route: "/chat_page",
      },
      {
        id: 3,
        icon: "SmsBoldIcon",
        title: "Почта",
      },
    ],
  },
  {
    id: 2,
    title: "Инструменты",
    settingsBtnData: [
      {
        id: 0,
        icon: "GlovesBoldIcon",
        title: "Материалы",
      },
      {
        id: 1,
        icon: "MicroscopeBoldIcon",
        title: "Оборудование",
      },
      {
        id: 2,
        icon: "BoxBoldIcon",
        title: "Заявки",
      },
    ],
  },
  {
    id: 3,
    title: "Настройки",
    settingsBtnData: [
      {
        id: 0,
        icon: "NotificationBoldIcon",
        title: "Уведомления",
      },
      {
        id: 1,
        icon: "LockBoldIcon",
        title: "Безопасность",
      },
      {
        id: 2,
        icon: "MaskBoldIcon",
        title: "Оформление",
      },
      {
        id: 3,
        icon: "GlobalBoldIcon",
        title: "Язык",
      },
    ],
  },
];
