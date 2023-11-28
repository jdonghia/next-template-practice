import {
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Info from "./Info";
import SocialMediaList from "./SocialMediaList";

export default function Summary() {
  return (
    <div className="flex justify-around bg-custom-black py-4 text-sm text-white">
      <div className="flex gap-4">
        <Info
          icon={IoLocationOutline}
          text="24 Olive Street, Prairie, NY 53590"
        />
        <Info icon={AiOutlineMail} text="whitecollar@gmail.com" />
      </div>
      <div className="flex items-center gap-11">
        <Info icon={AiOutlineClockCircle} text="Mon - Fri: 8:00 am - 5:00 pm" />
        <SocialMediaList
          icons={[
            AiOutlineInstagram,
            AiOutlineFacebook,
            AiOutlineTwitter,
            BsPinterest,
          ]}
        />
      </div>
    </div>
  );
}
