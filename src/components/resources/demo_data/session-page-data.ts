import dayjs from "dayjs";
import { AppointmentButtonRowProps } from "../../cards/appointment_card/appointment_button_row/utils/appointment-button-row-type";
import { AppoinmentCardWrapItem } from "../../cards/appointment_card_wrap/utils/appointment-card-wrap-type";
import { LitleCardProps } from "../../cards/litle_cards/utils/litle-card-type";
import { ProblemCardProps } from "../../cards/problem_card/utils/problem-card-type";
import { CommonTitlerProps } from "../../navigations/titler/common_titler/utils/common-titler-type";

type ProblemCardDataType = ProblemCardProps;

export const problemCardData: ProblemCardDataType[] = [
  {
    id: 0,
    key: "today",
    title: "На сегодня",
    number: 3,
    iconWrap: {
      iconName: "CalendarTodayBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "static_blue",
    },
  },
  {
    id: 1,
    key: "planned",
    title: "Запланировано",
    number: 123,
    iconWrap: {
      iconName: "CalendarBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "static_pink",
    },
  },
  {
    id: 2,
    key: "history",
    title: "История",
    number: 134,
    iconWrap: {
      iconName: "ClockBoldIcon",
      iconColor: "static_white",
      iconBackgorund: "dynamic_light_gray60",
    },
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

export const AppointmentCardSessionDataHistory: AppoinmentCardWrapItem[] = [
  {
    date: "2022-10-25",
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
];
export const AppointmentCardSessionDataToday: AppoinmentCardWrapItem[] = [
  {
    date: dayjs().format("YYYY-MM-DD"),
    appointments: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Resol 2w",
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
];
export const AppointmentCardSessionDataPlanned: AppoinmentCardWrapItem[] = [
  {
    date: "2022-11-12",
    appointments: [
      {
        id: 0,
        photoUrl: "/monica.jpeg",
        title: "Resol sdv",
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
];
