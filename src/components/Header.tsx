import {
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "/public/assets/svgs/logo.svg";

export function Header() {
  return (
    <header>
      <div className="flex justify-around bg-custom-black py-4 text-sm text-white">
        <div className="flex gap-4">
          <p className="flex gap-2">
            <IoLocationOutline className="text-xl font-bold text-custom-blue" />
            24 Olive Street, Prairie, NY 53590
          </p>
          <p className="flex gap-2">
            <AiOutlineMail className="text-xl font-bold text-custom-blue" />
            whitecollar@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-11">
          <p className="flex gap-2">
            <AiOutlineClockCircle className="text-xl font-bold text-custom-blue" />
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
      <div className="mx-auto my-8 flex w-11/12 items-center justify-around">
        <Logo />
        <ul className="flex items-center gap-10 text-lg">
          <li>Home</li>
          <li>About Us</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>
            <button className="rounded bg-custom-purple p-4 text-white">
              Get Consulting
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
