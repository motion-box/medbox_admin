import { AppoinmentCardWrapItem } from "./../../cards/appointment_card_wrap/utils/appointment-card-wrap-type";
import { AppointmentButtonRowProps } from "../../cards/appointment_card/appointment_button_row/utils/appointment-button-row-type";
import { AppointmentCardProps } from "../../cards/appointment_card/utils/appointment-card-type";
import { LitleCardProps } from "../../cards/litle_cards/utils/litle-card-type";
import { CommonTitlerProps } from "../../navigations/titler/common_titler/utils/common-titler-type";

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
        button: {
          iconName: "ArrowRightLinearIcon",
          text: "Показать все",
          color: "dynamic_light_gray60",
          isReverse: true,
        },
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
    titlerdata: [
      {
        id: 1,
        title: "На сегодня",
        type: "middle",
        button: {
          iconName: "ArrowRightLinearIcon",
          text: "Показать все",
          color: "dynamic_light_gray60",
          isReverse: true,
        },
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

export const AppointmentCardDemoData: AppoinmentCardWrapItem[] = [
  {
    date: "2022-10-26",
    appointments: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 1,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 2,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 3,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
    ],
  },
  {
    date: "2022-10-23",
    appointments: [
      {
        id: 4,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 5,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 6,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 7,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
    ],
  },
  {
    date: "2022-12-31",
    appointments: [
      {
        id: 8,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 9,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 10,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
      {
        id: 11,
        photoUrl: "/monica.jpeg",
        title: "Resol",
        description: "Team Secret",
        time: "17:00",
        label: "TI11",
        queueNum: "122",
        roomNum: "132",
        durationNum: "20 мин",
      },
    ],
  },
];
