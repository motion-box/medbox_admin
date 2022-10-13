import { AppointmentButtonRowProps } from "../../cards/appointment_card/appointment_button_row/utils/appointment-button-row-type";
import { LitleCardProps } from "../../cards/litle_cards/utils/litle-card-type";
import { ProblemCardProps } from "../../cards/problem_card/utils/problem-card-type";
import { CommonTitlerProps } from "../../navigations/titler/common_titler/utils/common-titler-type";

type ProblemCardDataType = ProblemCardProps;

export const problemCardData: ProblemCardDataType[] = [
  {
    id: 0,
    title: "На сегодня",
    number: 3,
    iconWrap: {
      iconName: "CalendarTodayBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "static_blue",
    },
    backgroundColor: "static_white",
  },
  {
    id: 1,
    title: "Запланировано",
    number: 12,
    iconWrap: {
      iconName: "CalendarBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "static_pink",
    },
    backgroundColor: "static_white",
  },
  {
    id: 2,
    title: "История",
    number: 1343,
    iconWrap: {
      iconName: "ClockBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "dynamic_light_gray60",
    },
    backgroundColor: "static_white",
  },
];

type LitleCardType = LitleCardProps;

export const litleCardTypeData: LitleCardType[] = [
  {
    id: 0,
    title: "Очередь",
    type: "active",
    counter: "044",
  },
  {
    id: 1,
    title: "Комната",
    type: "notActive",
    counter: "044",
  },
  {
    id: 2,
    title: "Длительность",
    type: "notActive",
    counter: "044",
  },
];

type AppointmentCardDataType = {
  id: number;
  titlerdata?: CommonTitlerProps[];
  litleCardData: LitleCardProps[];
  buttonRowData: AppointmentButtonRowProps[];
};

export const AppointmentCardData: AppointmentCardDataType[] = [
  {
    id: 0,
    titlerdata: [
      {
        id: 0,
        title: "На сегодня",
        type: "middle",
      },
    ],
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
  {
    id: 1,
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
  {
    id: 2,
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
  {
    id: 3,
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
  {
    id: 4,
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
  {
    id: 5,
    buttonRowData: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Monica",
        description: "Client",
        titleicon: "VerifyBoldIcon",
        time: "09:40",
        label: "label",
      },
    ],
    litleCardData: [
      {
        id: 0,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 1,
        title: "очередь",
        type: "active",
        counter: "044",
      },
      {
        id: 2,
        title: "очередь",
        type: "active",
        counter: "044",
      },
    ],
  },
];
