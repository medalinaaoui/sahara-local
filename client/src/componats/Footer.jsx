import { footerData } from "../payload";
import { useSelector } from "react-redux";

const Footer = () => {
  const lang = useSelector((state) => state.user.language) || "arabic";

  return (
    <footer className="footer-bg text-white font-semibold  flex flex-col items-center">
      <div className="flex lg:flex-row flex-col lg:justify-around justify-between items-center gap-16 w-full my-16 ">
        <div>
          <h6 className="text-center text-2xl font-bold">Sahara Local</h6>
          <p className="text-center">{footerData[lang].companyAddress}</p>
        </div>

        <div
          className={`grid  md:grid-cols-3 grid-cols-2 gap-10 md:gap-40 ${
            lang === "arabic" ? "text-right " : ""
          }`}
        >
          <div className="flex flex-col gap-6 md:gap-8">
            <h5 className="font-bold text-lg ">
              {" "}
              {footerData[lang].links.title}
            </h5>
            <ul className="text-sm flex flex-col gap-4 md:gap-8">
              {footerData[lang].links.items?.map((link, i) => (
                <li className="" key={i}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="flex flex-col gap-8">
            <h5 className="font-semibold text-base ">
              {footerData[lang].company.title}
            </h5>
            <ul className="text-sm flex flex-col gap-8">
              {footerData[lang].company.items?.map((comp, i) => (
                <li key={i}>{comp}</li>
              ))}
            </ul>
          </div> */}

          <div className="flex flex-col gap-8">
            <h5 className="font-bold text-lg ">
              {footerData[lang].contact.title}
            </h5>
            <ul className="text-sm flex flex-col gap-4 md:gap-8">
              {footerData[lang].contact.items?.map((con, i) => (
                <li className="" key={i}>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center my-4  text-sm">
        &copy; {footerData[lang].copyright}
      </p>
    </footer>
  );
};
export default Footer;
