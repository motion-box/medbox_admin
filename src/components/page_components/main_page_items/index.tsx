import AppointmentCard from "../../cards/appointment_card";
import CommonTitler from "../../navigations/titler/common_titler";
import { CommonTitlerProps } from "../../navigations/titler/common_titler/utils/common-titler-big";
import Container from "./style";

const MainPageItems = () => {
  return (
    <Container>
      <CommonTitler title="Title" type="big" />
      <img src="/recorddemo.png" />
      <div className="appoinment-container">
        <AppointmentCard />
      </div>
    </Container>
  );
};

export default MainPageItems;
