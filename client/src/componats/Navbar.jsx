import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { useSelector } from "react-redux";
import { navbarData, assets } from "../payload";
import { useDispatch } from "react-redux";
import { changeLang } from "../features/userSlice";
import { useState } from "react";
// import { FiLogOut } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";

const Navbar = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const lang = useSelector((state) => state.user.language) || "arabic";

  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState("arabic"); // Set the initial language here

  const [menuToggel, setMenuToggel] = useState(false);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    dispatch(changeLang(newLanguage));
  };
  console.log("navbarData.english.logo: ", navbarData.english.logo);

  console.log("navbarData", navbarData);
  return (
    <header className="flex px-40 pt-8 w-full justify-between items-center gap-12">
      <h1 className="text-3xl font-bold">Sahara local</h1>
      <div>
        <select
          className="select select-primary select-sm w-32 max-w-xs outline-none active:outline-none"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="arabic">Arabic</option>
          <option value="english">English</option>
        </select>
      </div>
      <nav className="grow">
        <ul
          className={
            lang === "arabic"
              ? "flex flex-row-reverse justify-between px-8 font-semibold"
              : "flex justify-between px-8 font-semibold"
          }
        >
          <li>
            <Link to="/">{navbarData[lang].home}</Link>
          </li>
          <li>
            <Link to="/about">{navbarData[lang].about_us}</Link>
          </li>
          <li>
            <Link to="/services">{navbarData[lang].services}</Link>
          </li>
          <li>
            <Link to="/contact_us">{navbarData[lang].contact_us}</Link>
          </li>
        </ul>
      </nav>

      {currUser ? (
        <div className="flex items-center  gap-3">
          <Link to="/profile">
            <div className="avatar mt-2">
              <div className="w-10 aspect-square rounded-full">
                <img src={currUser.profile_pic} />
              </div>
            </div>
          </Link>
          <div className="flex items-center relative">
            <Link to="/profile">
              <p className="font-semibold text-secondary">
                {currUser.username}
              </p>
            </Link>
            <span
              onClick={() => setMenuToggel(!menuToggel)}
              className="text-2xl text-secondary cursor-pointer"
            >
              <MdOutlineExpandMore />
            </span>
            {menuToggel && (
              <ul className="absolute top-6 left-20 menu w-32 bg-slate-500 rounded-box">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <button className="btn btn-sm bg-secondary text-white hover:text-secondary">
            <Link to="/login">{navbarData[lang].login}</Link>
          </button>
          <button className="btn btn-sm border-secondary border-1 text-secondary">
            <Link to="/register">{navbarData[lang].register}</Link>
          </button>
        </div>
      )}
    </header>
  );
};
export default Navbar;
