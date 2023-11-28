import { Banner } from "@/components/Banner";
import { CustomTitle } from "@/components/CustomTitle";
import { AiFillCheckCircle, AiFillPlayCircle } from "react-icons/ai";
import {
  BsCheckCircleFill,
  BsFillFileCodeFill,
  BsStarFill,
  BsTrophy,
} from "react-icons/bs";
import { PiScrollLight } from "react-icons/pi";
import {
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";

import ClientLogo from "/public/assets/svgs/client-logo.svg";
import { UnderlineButton } from "@/components/UnderlineButton";
import { CustomSubtitle } from "@/components/CustomSubtitle";

export default function Home() {
  return (
    <main>
      <WelcomeBanner />
      <AboutUs />
      <Services />
      <WhyChooseMe />
      <OurProject />
      <Testimonial />
    </main>
  );
}

function WelcomeBanner() {
  return (
    <Banner.Root background="bg-[url('/assets/bgs/home.png')]">
      <CustomTitle
        text="Welcome to Whitecollar Solution"
        className="font-semibold"
      />
      <Banner.Subtitle>
        The Best Value <br />
        for
        <strong className="font-bold text-custom-blue"> Business</strong>
        and Corporation
      </Banner.Subtitle>
      <Banner.Description>
        Collaboratively administrate empowered markets plug <br />
        and play networks dynamically procrastinated
      </Banner.Description>
      <div className="mt-6 flex items-center gap-9">
        <button className="rounded bg-custom-blue p-5 font-semibold">
          Get Consulting
        </button>
        <div className="flex cursor-pointer items-center gap-3">
          <AiFillPlayCircle className="rounded-full bg-white text-6xl text-custom-purple" />
          <UnderlineButton text="Watch Videos" className="text-white" />
        </div>
      </div>
    </Banner.Root>
  );
}

function AboutUs() {
  return (
    <div className="flex">
      <div className="flex w-5/12 justify-end bg-gray-100 py-28">
        <div className="me-16 w-1/2">
          <img src="/assets/imgs/people-together.png" />
          <p className="mb-3 mt-4 font-poppins text-2xl font-bold text-custom-black">
            We’re Ready To Grow Your Business With Us
          </p>
          <p className="font-normal text-custom-gray">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. thinking to further the overall value proposition.
          </p>
          <UnderlineButton
            text="Get in Touch"
            className="mt-4 text-custom-black"
          />
        </div>
      </div>
      <div className="w-4/12 py-28 ps-16">
        <CustomTitle
          text="Welcome Whitecollar"
          className="mb-4 font-medium text-custom-black"
        />
        <CustomSubtitle>
          We Care About Your
          <br /> Business Plan.
        </CustomSubtitle>
        <p className="mb-6 mt-4 font-poppins text-4xl font-bold text-custom-black"></p>
        <p className="font-normal text-custom-gray">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall.
        </p>
        <p className="font-normal text-custom-gray">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews.Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall.
        </p>
        <ul className="my-5 flex flex-col gap-5">
          <li className="flex gap-2">
            <AiFillCheckCircle className="text-3xl text-custom-purple" />
            <span className="font-poppins text-xl font-normal text-custom-black">
              Components of a Business Strategy
            </span>
          </li>
          <li className="flex gap-2">
            <AiFillCheckCircle className="text-3xl text-custom-purple" />
            <span className="font-poppins text-xl font-normal text-custom-black">
              Business Consulting
            </span>
          </li>
        </ul>
        <ul className="mb-5 mt-10 flex  gap-5">
          <li className="flex gap-4 border px-5 py-6">
            <PiScrollLight className="text-7xl text-custom-blue" />
            <div>
              <h3 className="mb-1 font-poppins text-xl font-medium text-custom-black">
                Experience
              </h3>
              <p className="font-normal text-custom-gray">
                Leverage frameworks toprovidee werment.
              </p>
            </div>
          </li>
          <li className="flex gap-4 border px-5 py-6">
            <BsTrophy className="text-6xl text-custom-blue" />
            <div>
              <h3 className="mb-1 font-poppins text-xl font-medium text-custom-black">
                Awards Winner
              </h3>
              <p className="font-normal text-custom-gray">
                Leverage frameworks toprovidee werment.
              </p>
            </div>
          </li>
        </ul>
        <button className="mt-2 rounded bg-custom-purple px-6 py-4 font-medium text-white">
          More About Us
        </button>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    {
      icon: HiOutlineBuildingLibrary,
      label: "Financial Consultancy",
    },
    {
      icon: VscGraph,
      color: "bg-custom-purple",
      label: "Business Management",
    },
    {
      icon: BsFillFileCodeFill,
      label: "Consultants & program",
    },
    {
      icon: HiOutlineBuildingOffice2,
      label: "Company Management",
    },
    {
      icon: PiScrollLight,
      label: "Financial & Insurance jobs",
    },
  ];

  return (
    <div className="m-auto  flex w-8/12 flex-col items-center py-20">
      <ClientLogo />
      <div className="mt-20 flex flex-col items-center text-center">
        <CustomTitle
          text="We are expertise in"
          className="font-medium text-custom-black"
        />
        <CustomSubtitle className="mb-6 mt-4">
          We Provide Professional <br />
          Business Solutions.
        </CustomSubtitle>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
          {items.map(({ icon: Icon, label, color }) => (
            <li className="relative flex w-[25%] items-center justify-around bg-gray-100 px-2 py-5">
              <div className="w-1/2 text-start">
                <h4 className="font-poppins text-xl font-medium">{label}</h4>
                <button className="mt-4 font-medium text-custom-purple hover:underline">
                  Read More
                </button>
              </div>
              <div
                className={`${
                  color || "bg-custom-blue"
                }  mb-8 inline-block rounded-full p-3`}
              >
                <Icon className="text-4xl  text-white" />
              </div>
            </li>
          ))}
          <li className="relative flex w-[25%] items-center justify-around bg-custom-purple px-2 py-14 font-bold text-white ">
            More Services
          </li>
        </ul>
      </div>
    </div>
  );
}

function WhyChooseMe() {
  return (
    <Banner.Root
      background="bg-[url('/assets/bgs/bg-2.png')]"
      className="w-[55%] bg-opacity-100 py-32"
    >
      <div className="m-auto me-20 w-7/12">
        <CustomTitle text="Why Choose Me" className="font-medium" />
        <Banner.Subtitle size="small">
          We Provide Solutions To <br /> Grow Your Business
        </Banner.Subtitle>
        <Banner.Description>
          Leverage agile frameworks to provide a robust synopsis for high
          <br />
          level overviews. thinking to further the overall proposition.
        </Banner.Description>
        <ul className="mt-7 flex gap-4">
          <li className="flex items-center justify-center gap-4 bg-[#2E2F34] p-6 text-white">
            <div className="rounded-full bg-custom-blue p-[2px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-custom-black p-3 font-semibold">
                95%
              </div>
            </div>
            <div>
              <p>Clients</p>
              <p className="font-semibold">Quick Response</p>
            </div>
          </li>
          <li className="flex items-center justify-center gap-4 bg-[#2E2F34] p-6 text-white">
            <div className="rounded-full bg-custom-blue p-[2px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-custom-black p-3 font-semibold">
                85%
              </div>
            </div>
            <div>
              <p>Project</p>
              <p className="font-semibold">Finished Jobs</p>
            </div>
          </li>
        </ul>
        <ul className="mt-10 flex flex-wrap  text-white">
          <li className="flex w-1/2">
            <BsCheckCircleFill className="me-2 text-2xl text-custom-blue" />
            <p>
              <b className="font-semibold">2,800+</b> Active Clients
            </p>
          </li>
          <li className="flex w-1/2">
            <BsCheckCircleFill className="me-2 text-2xl text-custom-blue" />
            <b className="font-semibold">106+</b>
          </li>
          <li className="mt-5 flex w-1/2">
            <BsCheckCircleFill className="me-2 text-2xl text-custom-blue" />
            <p>
              <b className="font-semibold">1,670 +</b>{" "}
              <span className="text-[#FFB342]">
                5 <BsStarFill className="mb-1 inline-block" /> stars
              </span>{" "}
              reviews
            </p>
          </li>
          <li className="flex w-1/2">
            <UnderlineButton
              text="Get in Touch"
              className="mt-4 text-custom-blue"
            />
          </li>
        </ul>
      </div>
    </Banner.Root>
  );
}

function OurProject() {
  return (
    <div>
      <div className="mt-8 flex items-center justify-around py-14">
        <div>
          <CustomTitle
            text="Our Project"
            className="font-medium text-custom-black"
          />
          <CustomSubtitle className="mt-4">
            You can check our projects <br /> as inspirations.
          </CustomSubtitle>
        </div>
        <button className="bg-custom-blue px-9 py-4 font-semibold text-white">
          More Work
        </button>
      </div>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <img src="assets/imgs/our-project/image-1.png" />
        </li>
        <li>
          <img src="assets/imgs/our-project/image-2.png" />
        </li>
        <li>
          <img src="assets/imgs/our-project/image-3.png" />
        </li>
        <li>
          <img src="assets/imgs/our-project/image-4.png" />
        </li>
      </ul>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="mt-40">
      <div className="m-auto flex w-7/12 gap-8 border-t border-[#C5C5C5] pt-40">
        <div className="w-4/12">
          <CustomTitle text="Testimonial" className="text-custom-black" />

          <CustomSubtitle className="mt-4">
            What Our <br />
            Client Say’s
          </CustomSubtitle>
          <p className="mt-6 font-inter text-lg text-custom-gray">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative
          </p>
        </div>
        <div className="w-4/12 bg-[#F6F6F6] p-10">
          <div className="flex gap-4">
            <img src="assets/imgs/testimonials/image-1.png" />
            <div>
              <p className="text-xl font-semibold text-custom-black">
                Natasha Kelvin
              </p>
              <p className="text-custom-gray">Designer</p>
              <span className="flex gap-[2px]">
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
              </span>
            </div>
          </div>
          <p className="mt-5 font-inter text-[22px] text-custom-gray">
            “ dd an excerpt from your personal biography, or simply let the
            world know who you are and what you have to offer. Connect with your
            site visitor’s on a personal level and make sure that your site.
          </p>
        </div>
        <div className="h-80 w-4/12 bg-[#F6F6F6] p-10">
          <div className="flex gap-4">
            <img src="assets/imgs/testimonials/image-2.png" />
            <div>
              <p className="text-xl font-semibold text-custom-black">
                Natasha Kelvin
              </p>
              <p className="text-custom-gray">Designer</p>
              <span className="flex gap-[2px]">
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
                <BsStarFill className="text-[#ffb342]" />
              </span>
            </div>
          </div>
          <p className="mt-5 font-inter text-[22px] text-custom-gray">
            “ Leverage agile frameworks to provide a robust synopsis for high
            level overviews ”
          </p>
        </div>
      </div>
    </div>
  );
}
