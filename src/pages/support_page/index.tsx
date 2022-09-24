import ButtonRow from "../../components/buttons/button_row";
import NavButton from "../../components/buttons/nav_button";
import SegmentedPicker from "../../components/navigations/segmented_picker";
import CommonTitler from "../../components/navigations/titler/common_titler";
import LayoutPage from "../../components/page_components/layout_page";
import LeftPanel from "../../components/page_components/left_panel";
import RightPanel from "../../components/page_components/right_panel";
import TextProvider from "../../components/providers/text_provider";
import Container from "./style";

const SupportPage = () => {
  return (
    <Container>
      <LayoutPage supportPage>
        <LeftPanel />
        <RightPanel>
          <div className="title">
            <CommonTitler
              title="Title"
              type="big"
              button={{
                text: "Написать",
                color: "static_blue",
                iconName: "SmsEditLinearIcon",
              }}
            />
          </div>

          <SegmentedPicker />
          <ButtonRow
            badge
            photo="/avatar.webp"
            title="MEDBOX support"
            description="Зарплатный отчет"
            titleBottomLeft="s"
            arrow="ArrowRightLinearIcon"
            backgroundColor="static_blue10"
          />
          <ButtonRow
            badge
            photo="/avatar.webp"
            title="MEDBOX support"
            description="Зарплатный отчет"
            titleBottomLeft="s"
            arrow="ArrowRightLinearIcon"
          />
          <ButtonRow
            badge
            photo="/avatar.webp"
            title="MEDBOX support"
            description="Зарплатный отчет"
            titleBottomLeft="s"
            arrow="ArrowRightLinearIcon"
          />
          <ButtonRow
            badge
            photo="/avatar.webp"
            title="MEDBOX support"
            description="Зарплатный отчет"
            titleBottomLeft="s"
            arrow="ArrowRightLinearIcon"
          />
        </RightPanel>

        <div className="text-container">
          <div className="header">
            <NavButton
              text="Назад"
              icon="ArrowLeftLinearIcon"
              onClick={() => "sad"}
              flexDirection
              options={{
                textOptions: {
                  fontSize: 17,
                  fontWeight: 400,
                  color: "static_blue",
                },
                iconOptions: {
                  width: 24,
                  height: 24,
                  color: "static_blue",
                },
              }}
            />

            <TextProvider
              options={{
                fontSize: 17,
                fontWeight: 700,
                color: "static_black",
              }}
            >
              MEDBOX Support
            </TextProvider>
            <NavButton
              text="Назад"
              icon="ArrowRightLinearIcon"
              onClick={() => "sad"}
              options={{
                textOptions: {
                  fontSize: 17,
                  fontWeight: 400,
                  color: "static_blue",
                },
                iconOptions: {
                  width: 24,
                  height: 24,
                  color: "static_blue",
                },
              }}
            />
          </div>
          <div className="droplet">
            <TextProvider
              options={{
                fontSize: 17,
                fontWeight: 700,
                color: "static_black",
              }}
            >
              Your New Droplet: MEATBOX.UZ
            </TextProvider>
          </div>
          <div className="droplet">
            <TextProvider
              options={{
                fontSize: 17,
                fontWeight: 400,
                color: "static_black",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              numquam dolor architecto facilis, eum eius eveniet consectetur
              modi veritatis aut saepe voluptas vel dolorum omnis quaerat
              ratione, placeat et itaque.
            </TextProvider>
          </div>
          <div className="droplet">
            <TextProvider
              options={{
                fontSize: 17,
                fontWeight: 400,
                color: "static_black",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos fugit officiis fugiat optio animi tempora autem
              tenetur voluptatem dicta esse totam voluptate expedita provident
              qui sint incidunt quisquam, molestias deserunt eum voluptatibus
              nostrum. Pariatur dolorem deleniti enim asperiores, ullam porro
              itaque minima, est, doloribus rerum praesentium nobis esse.
              Deserunt sed labore, ipsum consequuntur commodi recusandae culpa
              cupiditate unde corporis aperiam eius dolor minus. Quae at
              temporibus, minima quidem totam accusamus aliquam laboriosam
              nobis? Quod tempora sint, ipsam architecto tempore mollitia
              aspernatur impedit atque? Incidunt praesentium, voluptatum,
              possimus iste earum, animi nostrum consequuntur atque non sunt
              nobis. Fugiat aperiam atque veritatis!
            </TextProvider>
          </div>
        </div>
      </LayoutPage>
    </Container>
  );
};

export default SupportPage;
