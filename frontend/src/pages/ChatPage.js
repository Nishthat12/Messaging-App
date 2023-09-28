import { ChatState } from "../Context/ChatProvider";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState();
  const history = useHistory();

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if the user is not authenticated, and redirect them to the login page
    if (!token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        w="100%"
        h="91vh"
        p="10px"
        display="flex"
        justifyContent="space-between"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
