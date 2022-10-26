import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import CommonTitler from "../../navigations/titler/common_titler";
import AppointmentCardApp from "../appointment_card";
import Container from "./style";
import { AppointmentCardWrapProps } from "./utils/appointment-card-wrap-type";

const AppointmentCardWrap = (props: AppointmentCardWrapProps) => {
  const { data } = props;
  const [selected, setSelected] = useState<number | null | string>(null);

  useEffect(() => {
    setSelected(null);
  }, [data]);

  const onCardClick = (id: number) => {
    if (id == selected) return setSelected(null);
    setSelected(id);
  };

  const parseDate = useCallback((date: string) => {
    const today = dayjs().format("YYYY-MM-DD");
    if (dayjs(date).isSame(today)) {
      return "На сегодня";
    } else if (dayjs(date).isAfter(today)) {
      return "Запланированно";
    } else {
      return "История";
    }
  }, []);

  return (
    <Container>
      {data.map((rootItem) => (
        <div key={rootItem.date} className="appointment-content-wrap">
          <CommonTitler
            title={parseDate(rootItem.date)}
            type="middle"
            button={{
              text: "Посмотреть все",
              iconName: "ArrowRightLinearIcon",
              color: "dynamic_light_gray60",
              isReverse: true,
            }}
          />
          {rootItem.appointments.map((item) => (
            <AppointmentCardApp
              key={item.id}
              {...item}
              onClick={() => onCardClick(item.id)}
              isActive={
                selected == item.id
                  ? "active"
                  : selected == null
                  ? "all_active"
                  : "disable"
              }
            />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default AppointmentCardWrap;
