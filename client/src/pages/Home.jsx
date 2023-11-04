import { useSelector } from "react-redux";
import { main } from "../payload";
import carPic from "../assets/3fab99ff58fd2951976ae3d367d6428b.png";
import audi from "../assets/2428e95a0fdbce6c630703a99e6be1f0.png";
import vols from "../assets/96d4d6eff7fe7a67efd77d646500075b.jpg";
import bmw from "../assets/9f456ebcb2b0598ae566274cf7da0532.png";
import merce from "../assets/00bcfe6faa96a02f7ac6bbae10842ea1.png";

const Home = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const lang = useSelector((state) => state.user.language) || "arabic";

  return (
    <div className="px-40 py-6 pt-16 ">
      <div
        className={`${
          lang === "arabic" ? "flex-row-reverse " : ""
        } main flex gap-4 relative items-center  pb-20 pt-8`}
      >
        <div className="text-right flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{main[lang].mainHead}</h1>
          <p className="tracking-tight ">{main[lang].mainPara}</p>
          <div className="flex flex-row-reverse gap-3">
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
        <div className="behind-the-car h-full w-60 rounded-md absolute left-10 top-0"></div>
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
    </div>
  );
};
export default Home;
