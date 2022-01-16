import "./App.css";
// components
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2823409e-6f55-447e-a4ab-437d6480a3b2"
      userName="Chhum"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
