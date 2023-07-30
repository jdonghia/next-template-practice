import { AiFillPlayCircle } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/assets/bgs/home.png')]">
        <div>
          <div className="ps-36 py-48 bg-opacity-80 backdrop-blur bg-custom-black w-5/12">
            <p className="text-white flex items-center gap-2 font-semibold">
              <span className="bg-custom-blue h-3 w-3 block"></span>
              Welcome to Whitecollar Solution
            </p>
            <p className="text-white font-bold leading-tight text-6xl my-4 font-poppins">
              The Best Value <br />
              for Business and Corporation
            </p>
            <p className="text-gray-300">
              Collaboratively administrate empowered markets plug <br />
              and play networks dynamically procrastinated
            </p>
            <div className="mt-6 flex items-center gap-9">
              <button className="bg-custom-blue p-5 rounded font-semibold">
                Get Consulting
              </button>
              <div className="flex items-center gap-3 cursor-pointer">
                <AiFillPlayCircle className="text-custom-purple text-6xl bg-white rounded-full" />
                <p className="text-white underline font-semibold">
                  Watch Videos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
