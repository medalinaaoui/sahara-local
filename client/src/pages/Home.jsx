import { useSelector } from "react-redux";
import { main, howToStart, firstArrow, secondArrow } from "../payload";
import carPic from "../assets/3fab99ff58fd2951976ae3d367d6428b.png";
import audi from "../assets/2428e95a0fdbce6c630703a99e6be1f0.png";
import vols from "../assets/volkswagen-1-logo-png-transparent.png";
import bmw from "../assets/9f456ebcb2b0598ae566274cf7da0532.png";
import merce from "../assets/00bcfe6faa96a02f7ac6bbae10842ea1.png";
import { FaCar } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { LuPhoneIncoming, LuPhoneOutgoing } from "react-icons/lu";
import ShortAbout from "../componats/shortAbout";

const Home = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const lang = useSelector((state) => state.user.language) || "arabic";

  return (
    <main className="px-6 md:px-16  lg:px-40 py-6 pt-16 ">
      <div
        className={`${
          lang === "arabic" ? "sm:flex-row-reverse flex-col " : ""
        } main flex sm:flex-row flex-col gap-4 relative items-center pb-8 sm:pb-20 pt-8`}
      >
        <div
          className={`flex flex-col gap-4 ${
            lang === "arabic" ? "text-right" : ""
          }`}
        >
          <h1 className="text-2xl font-semibold">{main[lang].mainHead}</h1>
          <p className="tracking-tight ">{main[lang].mainPara}</p>
          <div
            className={`flex gap-3 ${
              lang === "arabic" ? "flex-row-reverse" : ""
            }`}
          >
            <button className="btn btn-outline btn-warning">
              {main[lang].addCar}
            </button>
            <button className="btn btn-outline btn-info">
              {main[lang].carList}
            </button>
          </div>
        </div>
        <div className="relative z-50 h-1/2 w-auto ">
          <img
            className=" w-full h-full object-contain"
            src={carPic}
            alt="car pic"
          />
        </div>
        <div className="z-0 behind-the-car h-1/4  w-full sm:hidden block rounded-md absolute bottom-20"></div>
        <div
          className={`sm:block hidden behind-the-car h-full lg:w-60 w-48 rounded-md absolute top-0 ${
            lang === "arabic" ? "left-10" : "right-10"
          }`}
        ></div>
      </div>
      <div className="flex brands justify-around px-4 md:px-16  lg:px-40 items-center">
        <div className="w-[4.5rem] sm:w-36">
          <img src={audi} alt="audi" />
        </div>
        <div className="w-[2.5rem] sm:w-16">
          <img src={vols} alt="volvo" />
        </div>
        <div className="w-[2.5rem] sm:w-16">
          <img src={bmw} alt="bmw" />
        </div>
        <div className="w-[2.5rem] sm:w-16">
          <img src={merce} alt="mercedes" />
        </div>
      </div>

      <div className="py-12">
        <div className="pb-8 sm:pb-12">
          <h2 className="text-2xl sm:text-5xl font-bold text-center text-secondary">
            {howToStart[lang].head}
          </h2>
          <h3 className="text-center text-base sm:text-lg font-semibold text-blue-700">
            {howToStart[lang].subHead}
          </h3>
        </div>

        <div className="flex gap-6 lg:gap-8 flex-col">
          <h4 className="text-center text-xl lg:text-3xl font-semibold text-accent">
            {howToStart[lang].add.addTitle}
          </h4>
          <div
            className={`flex gap-2 items-center lg:flex-row flex-col ${
              lang === "arabic" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center flex-col items-center gap-2 lg:gap-4">
              <span className="text-8xl w-40 aspect-square text-secondary flex justify-center items-center border-2 border-secondary rounded-3xl">
                <RiUserAddLine />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepOne.title}
              </h5>
              <p className="text-sm text-center px-24 lg:px-0 opacity-70">
                {howToStart[lang].add.stepOne.para}
              </p>
            </div>
            <div
              className={`${
                lang === "arabic" ? "lg:rotate-180" : "sm:mb-28"
              } lg:rotate-0 rotate-90 ml-64 lg:ml-0 my-6 lg:my-0`}
            >
              {firstArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-2 lg:gap-4">
              <span className="text-8xl bg-slate-500 w-40 aspect-square text-white flex justify-center items-center behind-the-car">
                <LuMessagesSquare />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepTwo.title}
              </h5>
              <p className="text-sm opacity-70 px-24 lg:px-0  text-center">
                {howToStart[lang].add.stepTwo.para}
              </p>
            </div>
            <div
              className={`${
                lang === "arabic" ? "lg:rotate-180 lg:mb-28" : ""
              } lg:rotate-0 rotate-90 mr-64 lg:mr-0 my-6 lg:my-0`}
            >
              {secondArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-2 lg:gap-4">
              <span className="text-8xl w-40 aspect-square text-secondary flex justify-center items-center border-2 border-secondary rounded-3xl">
                <LuPhoneIncoming />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepThree.title}
              </h5>
              <p className="text-sm opacity-70 px-24 lg:px-0  text-center">
                {howToStart[lang].add.stepThree.para}
              </p>
            </div>
          </div>
        </div>

        {/* <ShortAbout /> */}

        <div className="hidden  gap-8 flex-col my-12 px-6 pt-12">
          <h4 className="text-center text-3xl font-semibold text-accent">
            {howToStart[lang].rent.rentTitle}
          </h4>

          <div
            className={`flex gap-2 items-center  ${
              lang === "arabic" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl bg-slate-500 w-40 aspect-square text-white flex justify-center items-center behind-the-car">
                <FaCar />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].rent.stepOne.title}
              </h5>
              <p className="text-sm text-center opacity-70">
                {howToStart[lang].rent.stepOne.para}
              </p>
            </div>
            <div className={lang === "arabic" ? "rotate-180" : "mb-28"}>
              {firstArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl w-40 aspect-square text-secondary flex justify-center items-center border-2 border-secondary rounded-3xl">
                <GiCheckMark />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].rent.stepTwo.title}
              </h5>
              <p className="text-sm opacity-70 text-center">
                {howToStart[lang].rent.stepTwo.para}
              </p>
            </div>
            <div className={lang === "arabic" ? "rotate-180 mb-28" : ""}>
              {secondArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl bg-slate-500 w-40 aspect-square text-white flex justify-center items-center behind-the-car">
                <LuPhoneOutgoing />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].rent.stepThree.title}
              </h5>
              <p className="text-sm opacity-70 text-center">
                {howToStart[lang].rent.stepThree.para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
