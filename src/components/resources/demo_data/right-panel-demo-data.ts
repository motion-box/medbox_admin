import { SegmentedPickerButtonProps } from "../../navigations/segmented_picker_button/utils/segment-picker-button";
import { ChatButtonRowProps } from "../../page_components/right_panel/right_panel_item/chat_button_row/utils/chat-button-row-type";
import { MaterialButtonRowProps } from "../../page_components/right_panel/right_panel_item/material_button_row/utils/material-button-row-type";

type DataType = Omit<SegmentedPickerButtonProps, "activeIndex" | "onClick">;

export const data: DataType[] = [
  {
    id: 0,
    title: "Личные",
  },
  {
    id: 1,
    title: "Группы",
  },
];

type MaterialButtonType = MaterialButtonRowProps;

export const materialButtondata: MaterialButtonType[] = [
  {
    id: 0,
    title: "Стирильные прокладки",
    description: "1 шт",
    icon: "AttentionCircle",
  },
  {
    id: 1,
    title: "Лопаточка для осмотра",
    description: "10 шт",
    icon: "AttentionCircle",
  },
  {
    id: 2,
    title: "Ледокаин",
    description: "34 мл",
  },
  {
    id: 3,
    title: "Шприц 0.8 мо",
    description: "252 шт",
  },
  {
    id: 4,
    title: " Перчатки",
    description: "301 шт",
  },
  {
    id: 5,
    title: "Валерианка",
    description: "549 мл",
  },
  {
    id: 6,
    title: "Защитные очки",
    description: "5436 шт",
  },
];

type ChatButtonRowDataType = ChatButtonRowProps;

export const chatButtonRowData: ChatButtonRowDataType[] = [
  {
    id: 0,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
    notification: "4",
  },
  {
    id: 1,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
    notification: "4",
  },
  {
    id: 2,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
    notification: "4",
  },
  {
    id: 3,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
    notification: "4",
  },
  {
    id: 4,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 5,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 6,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 7,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 8,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 9,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 10,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 11,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 12,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
  {
    id: 13,
    photoUrl: "/monica.jpeg",
    title: "Leslie Alexander",
    description: "Maximum restarts ",
    rating: "5",
  },
];
