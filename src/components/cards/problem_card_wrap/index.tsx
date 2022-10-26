import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { problemCardData } from "../../resources/demo_data/session-page-data";
import ProblemCard from "../problem_card";
import Container from "./style";

const ProblemCardWrap = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("today");
  useEffect(() => {
    const filter = router.query.filter as string | undefined;
    if (!filter) {
      router.replace(
        `/session_page?filter=today`,
        `/session_page?filter=today`,
        {
          shallow: true,
        }
      );
      return;
    }
    switch (filter) {
      case "today":
        setSelected("today");
        break;
      case "planned":
        setSelected("planned");
        break;
      case "history":
        setSelected("history");
        break;
      default:
        setSelected("today");
        break;
    }
  }, []);
  const onCardClick = (key: string) => {
    if (key == selected) return;
    router.replace(
      `/session_page?filter=${key}`,
      `/session_page?filter=${key}`,
      {
        shallow: true,
      }
    );
    setSelected(key);
  };
  return (
    <Container>
      {problemCardData.map((item) => (
        <ProblemCard
          {...item}
          key={item.key}
          onClick={() => onCardClick(item.key)}
          isActive={selected == item.key ? "active" : "disable"}
          backgroundColor="static_white"
        />
      ))}
    </Container>
  );
};

export default ProblemCardWrap;
