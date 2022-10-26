import LitleCard from "../litle_cards";
import AppointmentButtonRow from "./appointment_button_row";
import Container from "./style";
import { AppointmentCardProps } from "./utils/appointment-card-type";

const AppointmentCardApp = (props: AppointmentCardProps) => {
  const {
    title,
    photoUrl,
    description,
    time,
    label,
    queueNum,
    roomNum,
    durationNum,
    isActive,
    onClick,
  } = props;
  return (
    <Container onClick={onClick} isActive={isActive || "all_active"}>
      <AppointmentButtonRow
        photoUrl={photoUrl}
        title={title}
        description={description}
        titleicon="VerifyBoldIcon"
        time={time}
        label={label}
      />
      <div className="litle-card-wrap">
        <LitleCard type="active" title="Очередь" counter={queueNum} />
        <LitleCard type="notActive" title="Комната" counter={roomNum} />
        <LitleCard
          type="notActive"
          title="Длительность"
          counter={durationNum}
        />
      </div>
    </Container>
  );
};

export default AppointmentCardApp;
