import AppointmentCard from "../../cards/appointment_card";
import CommonTitler from "../../navigations/titler/common_titler";
import Container from "./style";

const MainPageItems = () => {
  return (
    <Container>
      <CommonTitler title="Title" type="big" />
      <div className="image-container">
        <img src="/recorddemo.png" />
      </div>

      <div className="appoinment-container">
        <AppointmentCard />
      </div>
    </Container>
  );
};

export default MainPageItems;
