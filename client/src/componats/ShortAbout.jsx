import { about } from "../payload";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import carPic from "../assets/82842d5a586ac17596944622eeb86f99.jpg";
const ShortAbout = () => {
  const lang = useSelector((state) => state.user.language) || "arabic";
  return (
    <section>
      <h2 className="text-center sm:text-2xl text-xl font-extrabold py-6 sm:py-12 underline-offset-[17px] underline">
        {about[lang].title}
      </h2>
      <div className="flex sm:flex-row flex-col h-fit justify-between items-center gap-4">
        <img
          className="lg:w-1/3 sm:w-1/2 w-full rounded-xl shadow-2xl aspect-video"
          src={carPic}
          alt="car pic"
        />
        <div
          className={
            lang === "arabic" ? "text-right grid gap-2" : " grid gap-2"
          }
        >
          <p className="opacity-80 text-sm text-black font-semibold ">
            {about[lang].content}
          </p>
          <Link className="text-yellow-500 font-semibold text-lg" to="/about">
            {about[lang].readMore}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShortAbout;
