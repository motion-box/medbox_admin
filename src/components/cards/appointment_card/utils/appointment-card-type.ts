export type AppointmentCardProps = {
  id: number;
  title: string;
  photoUrl: string;
  description: string;
  time: string;
  label: string;
  queueNum: string;
  roomNum: string;
  durationNum: string;
  isActive?: AppointmentCardStateType;
  onClick?: () => void;
};

export type AppointmentCardStateType = "all_active" | "active" | "disable";
