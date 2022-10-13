import { AppointmentButtonRowProps } from "../../cards/appointment_card/appointment_button_row/utils/appointment-button-row-type";
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
