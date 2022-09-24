import { SwitcherModel } from "../../../models/buttonModel";
import Container from "./style";

interface Iprops extends SwitcherModel {}

const Switcher = (props: Iprops) => {
  const { toggle, setToggle, backgroundColor } = props;
  return <Container></Container>;
};

export default Switcher;
