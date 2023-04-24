import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef<null | HTMLUListElement>(null);

  const showNav = () => {
    navRef.current?.classList.toggle("responsive-nav");
  };

  return (
    <div className="bg-[#2C3333] nav-container">
      <nav className="nav-holder flex items-center justify-between text-white py-8 max-w-[1024px] mx-[auto]">
        <div className="h2-holder">
          <h2 className="text-2xl">Bitlease</h2>
        </div>

        <ul className="nav-ul flex ml-[auto] items-center" ref={navRef}>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <button className="ml-6 border-[#0E8388] border-2 py-2 px-4 rounded-xl">
              Open App
            </button>
          </li>

          {/* close button */}
          <button onClick={showNav} className="nav-btn nav-btn-close">
            <FaTimes />
          </button>
        </ul>

        {/* put open button here */}
        <button onClick={showNav} className="nav-btn">
          <FaBars />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
