import { Logo, Menu, LogoV, LogoM } from "../components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import DeletedLogo from "./deletedLogo";

const Header = () => {
  const { showMenu, hideMenu, menu, logo } = useGlobalContext();
  // console.log(logo);
  return (
    <header className="font-IBM w-full min-w-[440px]">
      <nav className="flex flex-col items-center mt-8 laptop:flex-row laptop:justify-between">
        <Logo />
        <ul className="flex justify-center mt-8 gap-x-8 ml-6 laptop:ml-0 laptop:mr-32 laptop:mt-1 laptop:justify-end border pl-2 pr-6 py-6 border-dashed">
          <Link to="/">
            <li className="text-body-3 hover:text-00aecb cursor-pointer hover:underline">
              Home
            </li>
          </Link>
          <Link to="/projects">
            <li className="text-body-3 hover:text-00aecb cursor-pointer hover:underline">
              Projects
            </li>
          </Link>
          <Link to="/lab">
            <li className="text-body-3 hover:text-00aecb cursor-pointer hover:underline">
              Lab
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-body-3 hover:text-00aecb cursor-pointer hover:underline">
              Contact me
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
