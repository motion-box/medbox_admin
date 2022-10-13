import ButtonRow from "../../../../buttons/button_row";
import { useChatButtonRowOptions } from "./utils/chat-button-row-options";
import { ChatButtonRowProps } from "./utils/chat-button-row-type";

const ChatButtonRow = (props: ChatButtonRowProps) => {
  const options = useChatButtonRowOptions(props);
  return <ButtonRow {...options} />;
};

export default ChatButtonRow;
