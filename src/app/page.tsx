import { Banner } from "@/components/Banner";
import { CustomTitle } from "@/components/CustomTitle";
import { AiFillPlayCircle } from "react-icons/ai";

export default function Home() {
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
      <div>
        <div>
          <div>
            <img src="/assets/imgs/people-together.png" />
            <p>We’re Ready To Grow Your Business With Us</p>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.
            </p>
            <a>Get in Touch</a>
          </div>
        </div>
        <div>
          <CustomTitle text="Welcome Whitecollar" color="text-custom-black" />
          <p>We Care About Your Business Plan.</p>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking to further the overal.
          </p>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.Iterative approaches to corporate strategy foster
            collaborative thinking to further the overal.
          </p>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li>
              <span>Icon</span>
              <h3>Experience</h3>
              <p>Leverage frameworks toprovidee werment.</p>
            </li>
            <li></li>
          </ul>
          <button>More About Us</button>
        </div>
      </div>
    </main>
  );
}
