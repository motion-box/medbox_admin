import AppointmentCard from "../../cards/appointment_card";
import ProblemCard from "../../cards/problem_card";
import CommonTitler from "../../navigations/titler/common_titler";
import Container from "./style";

const SessionPageItems = () => {
  return (
    <Container>
      <CommonTitler
        title="Title"
        type="big"
        button={{
          text: "Календарь",
          color: "static_blue",
          iconName: "CalendarLinearIcon",
        }}
      />
      <div className="problem-card ">
        <ProblemCard
          iconWrap={{
            iconName: "CalendarTodayBoldIcon",
            iconColor: "static_white",
            iconBackgorund: "static_blue",
          }}
          title="На сегодня"
          backgroundColor="static_white"
          number={3}
        />
        <ProblemCard
          iconWrap={{
            iconName: "CalendarBoldIcon",
            iconColor: "static_white",
            iconBackgorund: "static_red",
          }}
          title="Запланировано"
          backgroundColor="static_white"
          number={12}
        />
        <ProblemCard
          iconWrap={{
            iconName: "ClockBoldIcon",
            iconColor: "static_white",
            iconBackgorund: "dynamic_light_gray30",
          }}
          title="История"
          backgroundColor="static_white"
          number={1703}
        />
      </div>
      <div className="appoinment-container">
        <AppointmentCard />
      </div>
    </Container>
  );
};

export default SessionPageItems;
