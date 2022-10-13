import ButtonRow from "../../../buttons/button_row";
import { useAppointmentButtonRowOptions } from "./utils/appointment-button-row-options";
import { AppointmentButtonRowProps } from "./utils/appointment-button-row-type";

const AppointmentButtonRow = (props: AppointmentButtonRowProps) => {
  const options = useAppointmentButtonRowOptions(props);
  return <ButtonRow {...options} />;
};

export default AppointmentButtonRow;
