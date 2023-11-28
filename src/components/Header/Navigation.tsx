import Logo from "/public/assets/svgs/logo.svg";

export default function Navigation() {
  return (
    <div className="mx-auto my-8 flex w-11/12 items-center justify-around">
      <Logo />
      <ul className="flex items-center gap-10 text-lg">
        {["Home", "About Us", "Pages", "Services", "Blog", "Contact Us"].map(
          (item) => (
            <li>{item}</li>
          ),
        )}
        <li>
          <button className="rounded bg-custom-purple p-4 text-white">
            Get Consulting
          </button>
        </li>
      </ul>
    </div>
  );
}
