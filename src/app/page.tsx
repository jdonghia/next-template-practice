import { Banner } from "@/components/Banner";
import { CustomTitle } from "@/components/CustomTitle";
import { AiFillCheckCircle, AiFillPlayCircle } from "react-icons/ai";
import { BsFillFileCodeFill, BsTrophy } from "react-icons/bs";
import { PiScrollLight } from "react-icons/pi";
import {
  HiOutlineBuildingLibrary,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";

import ClientLogo from "/public/assets/svgs/client-logo.svg";

export default function Home() {
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
    <main>
      <div className="bg-[url('/assets/bgs/home.png')]">
        <div>
          <Banner.Root>
            <CustomTitle text="Welcome to Whitecollar Solution" />
            <Banner.Subtitle>
              The Best Value <br />
              for
              <strong className="font-bold text-custom-blue"> Business </strong>
              and Corporation
            </Banner.Subtitle>
            <Banner.Description>
              Collaboratively administrate empowered markets plug <br />
              and play networks dynamically procrastinated
            </Banner.Description>
            <Banner.Navigation>
              <button className="rounded bg-custom-blue p-5 font-semibold">
                Get Consulting
              </button>
              <div className="flex cursor-pointer items-center gap-3">
                <AiFillPlayCircle className="rounded-full bg-white text-6xl text-custom-purple" />
                <p className="font-semibold text-white underline">
                  Watch Videos
                </p>
              </div>
            </Banner.Navigation>
          </Banner.Root>
        </div>
      </div>
      <div className="flex ">
        <div className="f flex w-5/12 justify-end bg-gray-100 py-28">
          <div className="me-16 w-1/2">
            <img src="/assets/imgs/people-together.png" />
            <p className="mb-3 mt-4 font-poppins text-2xl font-bold text-custom-black">
              We’re Ready To Grow Your Business With Us
            </p>
            <p className="font-normal text-custom-gray">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.
            </p>
            <button className="mt-4 text-lg font-bold text-custom-black underline">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="w-4/12 py-28 ps-16">
          <CustomTitle text="Welcome Whitecollar" color="text-custom-black" />
          <p className="mb-6 mt-4 font-poppins text-4xl font-bold text-custom-black">
            We Care About Your
            <br /> Business Plan.
          </p>
          <p className="font-normal text-custom-gray">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking to further the overal.
          </p>
          <p className="font-normal text-custom-gray">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking to further the overal.
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
      <div className="m-auto  flex w-8/12 flex-col items-center py-20">
        <ClientLogo />
        <div className="mt-20 flex flex-col items-center text-center">
          <CustomTitle text="We are expertise in" color="text-custom-black" />
          <p className="mb-6 mt-4 font-poppins text-4xl font-bold text-custom-black">
            We Provide Professional <br />
            Business Solutions.
          </p>
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
      <div className="flex text-white">
        <div className="7/12 flex items-center justify-end bg-custom-black px-5 py-14">
          <div className="me-14 w-1/2">
            <CustomTitle text="Why Choose Me" />
            <h2 className="font-poppins text-2xl font-bold ">
              We Provide Solutions To Grow Your Business
            </h2>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall proposition.
            </p>
            <ul className="flex">
              <li className="bg-[#2e2f34]">
                <div>
                  <span className="inline-block rounded-full border border-white bg-custom-black">
                    95%
                  </span>
                </div>
                <h4>Clients</h4>
                <h5>Quick Response</h5>
              </li>
              <li>
                <span>85%</span>
                <h4>Project</h4>
                <h5>Finished Jobs</h5>
              </li>
            </ul>
            <ul className="flex">
              <li>2,800+ Active clients</li>
              <li>106+</li>
              <li>1,670 + 5 stars reviews</li>
              <li>Get in Touch</li>
            </ul>
          </div>
        </div>
        <div className="grow bg-[url('/assets/bgs/home.png')]"></div>
      </div>
    </main>
  );
}
