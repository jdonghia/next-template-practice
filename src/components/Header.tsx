import {
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "@/public/assets/svgs/logo.svg";

export function Header() {
  return (
    <header>
      <div className="bg-custom-black text-white text-sm py-4 flex justify-around">
        <div className="flex gap-4">
          <p className="flex gap-2">
            <IoLocationOutline className="text-custom-blue font-bold text-xl" />
            24 Olive Street, Prairie, NY 53590
          </p>
          <p className="flex gap-2">
            <AiOutlineMail className="text-custom-blue font-bold text-xl" />
            whitecollar@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-11">
          <p className="flex gap-2">
            <AiOutlineClockCircle className="text-custom-blue font-bold text-xl" />
            Mon - Fri: 8:00 am - 5:00 pm
          </p>
          <ul className="flex items-center gap-3">
            <li>
              <AiOutlineInstagram className="text-xl" />
            </li>
            <li>
              <AiOutlineFacebook className="text-xl" />
            </li>
            <li>
              <AiOutlineTwitter className="text-xl" />
            </li>
            <li>
              <BsPinterest className="text-lg" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around my-8 w-11/12 mx-auto items-center">
        <Logo />
        <ul className="flex text-lg items-center gap-7">
          <li>Home</li>
          <li>About Us</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>
            <button className="bg-custom-purple p-4 rounded text-white">
              Get Consulting
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
