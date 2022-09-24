import Image from "next/image";
import IconProvider from "../providers/icon_provider";
import TextProvider from "../providers/text_provider";
import Container from "./style";

const ChatMessage = () => {
  return (
    <Container>
      <div className="text-container">
        <div className="chat">
          <TextProvider>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laud
          </TextProvider>
        </div>
        <div className="text-bottom-container">
          <TextProvider
            options={{
              fontSize: 12,
              fontWeight: 400,
              color: "dynamic_light_gray60",
            }}
          >
            12:00
          </TextProvider>
          <IconProvider
            icon="TickDubleLinearIcon"
            width={16}
            height={16}
            color="static_blue"
          />
        </div>
      </div>
    </Container>
  );
};

export default ChatMessage;

{
  /* <div className="photo-container"></div> */
}
