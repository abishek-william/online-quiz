import { Link } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useState } from "react";
function NavBar() {
    const [menuOpen , setMenuOpen] = useState(false)

    function togle(){
        setMenuOpen(!menuOpen)
    }
  return (
    <>
      <div className="bg-primary text-white flex justify-between align-middle px-10 py-6">
        <span className="font-bold text-2xl">
          <Link to={"/"}>QUIZ UP</Link>
        </span>
        <ul className="gap-4 md:gap-8 font-medium hidden md:block md:flex">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create-quiz"}>Create Quiz</Link>
          </li>
          <li>
            <Link to={"/my-account"}>My Quiz&#39;s</Link>
          </li>
        </ul>
        <span className="hidden md:block font-medium">
          <Link to={"/my-account"}>My Account</Link>
        </span>
        <button onClick={togle} className="md:hidden text-white  rounded-full px-3 hover:bg-accent2 focus:outline-none focus:ring-2 focus:ring-primary">
          <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" className="w-6 h-6" />
        </button>
        
      </div>
      <div className={`text-white bg-accent2 h-screen absolute right-0 translate-x-0 w-60 md:hidden ${menuOpen ? "" : "hidden"} `}>
        <ul className="font-medium md:hidden text-white px-5 py-6 text-xl space-y-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create-quiz"}>Create Quiz</Link>
          </li>
          <li>
            <Link to={"/my-account"}>My Quiz&#39;s</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
