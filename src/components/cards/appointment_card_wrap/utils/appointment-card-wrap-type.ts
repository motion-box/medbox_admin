import { AppointmentCardProps } from "./../../appointment_card/utils/appointment-card-type";
export type AppointmentCardWrapProps = {
  data: AppoinmentCardWrapItem[];
};

export type AppoinmentCardWrapItem = {
  date: string;
  appointments: AppointmentCardProps[];
};
