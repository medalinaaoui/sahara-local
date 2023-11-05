import { useSelector } from "react-redux";
import { main, howToStart, firstArrow, secondArrow } from "../payload";
import carPic from "../assets/3fab99ff58fd2951976ae3d367d6428b.png";
import audi from "../assets/2428e95a0fdbce6c630703a99e6be1f0.png";
import vols from "../assets/96d4d6eff7fe7a67efd77d646500075b.jpg";
import bmw from "../assets/9f456ebcb2b0598ae566274cf7da0532.png";
import merce from "../assets/00bcfe6faa96a02f7ac6bbae10842ea1.png";
import { FaCar } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { LuPhoneIncoming, LuPhoneOutgoing } from "react-icons/lu";

const Home = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const lang = useSelector((state) => state.user.language) || "arabic";

  return (
    <main className="px-40 py-6 pt-16 ">
      <div
        className={`${
          lang === "arabic" ? "flex-row-reverse " : ""
        } main flex gap-4 relative items-center  pb-20 pt-8`}
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
        <div className="z-10">
          <img className="" src={carPic} alt="car pic" />
        </div>
        <div
          className={`behind-the-car h-full w-60 rounded-md absolute top-0 ${
            lang === "arabic" ? "left-10" : "right-10"
          }`}
        ></div>
      </div>
      <div className="brands flex justify-around px-40 items-center">
        <div className="one">
          <img src={audi} alt="audi" />
        </div>
        <div className="two">
          <img src={vols} alt="volvo" />
        </div>
        <div className="three">
          <img src={bmw} alt="bmw" />
        </div>
        <div className="four">
          <img src={merce} alt="mercedes" />
        </div>
      </div>

      <div className="py-12">
        <div className="pb-12">
          <h2 className="text-5xl font-bold text-center text-secondary">
            {howToStart[lang].head}
          </h2>
          <h3 className="text-center text-lg font-semibold text-blue-700">
            {howToStart[lang].subHead}
          </h3>
        </div>

        <div className="flex gap-8 flex-col">
          <h4 className="text-center text-3xl font-semibold text-accent">
            {howToStart[lang].add.addTitle}
          </h4>
          <div
            className={`flex gap-2 items-center  ${
              lang === "arabic" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl w-40 aspect-square text-secondary flex justify-center items-center border-2 border-secondary rounded-3xl">
                <RiUserAddLine />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepOne.title}
              </h5>
              <p className="text-sm text-center opacity-70">
                {howToStart[lang].add.stepOne.para}
              </p>
            </div>
            <div className={lang === "arabic" ? "rotate-180" : "mb-28"}>
              {firstArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl bg-slate-500 w-40 aspect-square text-white flex justify-center items-center behind-the-car">
                <LuMessagesSquare />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepTwo.title}
              </h5>
              <p className="text-sm opacity-70 text-center">
                {howToStart[lang].add.stepTwo.para}
              </p>
            </div>
            <div className={lang === "arabic" ? "rotate-180 mb-28" : ""}>
              {secondArrow}
            </div>
            <div className="flex justify-center flex-col items-center  gap-4">
              <span className="text-8xl w-40 aspect-square text-secondary flex justify-center items-center border-2 border-secondary rounded-3xl">
                <LuPhoneIncoming />
              </span>
              <h5 className="text-lg font-semibold">
                {howToStart[lang].add.stepThree.title}
              </h5>
              <p className="text-sm opacity-70 text-center">
                {howToStart[lang].add.stepThree.para}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 flex-col my-12 px-6 pt-12">
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
