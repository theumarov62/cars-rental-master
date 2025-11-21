import { Link } from "react-router-dom";
import headerLogo from "../../images/header-images/header-logo.svg";
import phoneIcon from "../../images/header-images/phone-icon.svg";

const Header = () => {
  return (
    <header className="w-full shadow-md py-3">
      <div className="mycon flex items-center justify-between px-4">
        {/* Logo */}
        <Link to={"/"}>
          <img
            className="w-[80px] h-[30px] sm:w-[100px] sm:h-[40px]"
            src={headerLogo}
            alt="Car rental"
          />
        </Link>

        {/* Navigation — mobile column */}
        <nav
          className="
        hidden sm:flex 
        items-center gap-3 md:gap-4 lg:gap-5
        text-[14px] sm:text-[16px]
      "
        >
          <Link to="/">Home</Link>
          <Link to="/">Vehicles</Link>
          <Link to="/">Detail</Link>
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
        </nav>

        {/* Mobile menu icon */}
        <button className="sm:hidden text-white bg-[#5937E0] px-3 py-2 rounded-lg">
          Menu
        </button>

        {/* Phone */}
        <div className="hidden sm:flex items-center gap-2">
          <img src={phoneIcon} alt="Phone icon" />
          <a className="flex flex-col" href="tel:+9962471680">
            <span>Need help?</span>
            <span>+996 247-1680</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
