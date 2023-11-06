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
  const [selectedLanguage, setSelectedLanguage] = useState("arabic");
  const myModal = document.getElementById("my_modal_1");

  const [menuToggel, setMenuToggel] = useState(false);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
  };

  const languageChangeConfirm = () => {
    console.log("selectedLanguage:", selectedLanguage);
    dispatch(changeLang(selectedLanguage));
    myModal.close();
  };

  return (
    <header className=" z-50 bg-[#f5f5f5] fixed flex px-6 md:px-16 xl:px-40 py-2  w-full justify-between items-center gap-6 sm:gap-12">
      <div className="dropdown md:hidden block ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu justify-center items-center  mr-20 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="">
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
      </div>
      <h1 className="text-lg md:pb-2 md:text-xl lg:text-3xl font-bold ">
        Sahara local
      </h1>

      <button
        className="text-blue-900 font-semibold"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <div className="flex gap-1 items-center">
          <span className="text-sm">{lang.slice(0, 2).toUpperCase()}</span>
          <MdOutlineExpandMore className="text-lg" />
        </div>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  sm:px-24 px-8 flex flex-col gap-3">
          <h4 className="font-semibold">Choose language</h4>
          <hr />
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">(EN)English</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked={selectedLanguage === "english"}
                value="english"
                onClick={handleLanguageChange}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">(AR)العربية</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked={selectedLanguage === "arabic"}
                value="arabic"
                onClick={handleLanguageChange}
              />
            </label>
          </div>
          <hr />
          <div className="w-full flex flex-row-reverse sm:justify-between justify-end gap-2">
            <button
              onClick={languageChangeConfirm}
              className="btn btn-sm btn-primary "
            >
              OK
            </button>
            <form method="dialog">
              <button className="btn btn-sm btn-outline btn-primary ">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <nav className="grow md:block hidden">
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
        <div className="sm:flex hidden md:hidden lg:flex gap-3 ">
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
