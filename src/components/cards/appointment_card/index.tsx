import LitleCard from "../litle_cards";
import AppointmentButtonRow from "./appointment_button_row";
import Container from "./style";
import { AppointmentCard } from "./utils/appointment-card-type";

const AppointmentCard = (props: AppointmentCard) => {
  const { title, photo } = props;
  return (
    <Container>
      <AppointmentButtonRow
        photoUrl={photo}
        title={title}
        description="sda"
        titleicon={"ArrowLeftLinearIcon"}
        time="asd"
        label="sad"
      />
      <div className="litle-card-wrap">
        <LitleCard type="active" />
      </div>
    </Container>
  );
};

export default AppointmentCard;
