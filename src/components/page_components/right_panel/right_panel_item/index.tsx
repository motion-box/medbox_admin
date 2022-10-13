import CommonTitler from "../../../navigations/titler/common_titler";
import { materialButtondata } from "../../../resources/demo_data/right-panel-demo-data";
import MaterialButtonRow from "./material_button_row";
import Container from "./style";

const RightPanelItem = () => {
  return (
    <Container>
      <div className="material-wrap">
        <CommonTitler
          type="middle"
          title="Материалы"
          button={{
            text: "Заказать",
            iconName: "ArrowRightLinearIcon",
            color: "dynamic_light_gray60",
            isReverse: true,
          }}
        />
        <div className="material-button-wrap">
          {materialButtondata?.map((item) => (
            <MaterialButtonRow key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RightPanelItem;
