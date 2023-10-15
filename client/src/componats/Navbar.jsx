import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const Navbar = ({ login }) => {
  return (
    <header className="flex justify-around items-center py-3 px-6 bg-[#849BA2]">
      <div className="flex items-center">
        <h1 className="sm:text-3xl text-2xl font-bold ">Sahara Local</h1>
      </div>

      <div className="flex w-1/3 items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 pl-8 h-8 w-full"
        />
        <ImSearch className="absolute left-2 text-navColor" />
      </div>

      <nav className="flex items-center">
        <ul className="flex gap-5 font-bold">
          <li>
            <Link to={"/about"}>About</Link>
          </li>

          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {login ? (
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          ) : (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
