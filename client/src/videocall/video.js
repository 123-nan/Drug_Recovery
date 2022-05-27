import VideoCall from "./videocall";
import Notification from "./Notification";
import Option from "./Options";
import { ContextProvider } from "./socket";
import { useSelector } from "react-redux";

const Video= () =>{

    const {user} = useSelector((state) => ({...state}));
    const puid = user.user._id;

    return (
  <div>
      <ContextProvider>
      <VideoCall />
      <Option puid = {puid} realname={user.user.name} prof={user.u}>
          <Notification />
      </Option>
      </ContextProvider>
  </div>

    )
}

export default Video;