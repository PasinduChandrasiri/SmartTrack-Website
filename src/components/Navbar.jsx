import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo1, menu, close, back } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isMobileGallery = location.pathname === "/MobileGallery";
  const isProjectGallery = location.pathname === "/ProjectGallery";
  const isBehindTheSeenGallery = location.pathname === "/BehindTheSeenGallery";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Render Back button for MobileGallery */}
        {isMobileGallery || isProjectGallery || isBehindTheSeenGallery ? (

          <div
            onClick={() => navigate(-1)}
            className="w-full flex justify-between items-center max-w-7xl mx-auto cursor-pointer"
          >
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo1}
                alt="logo"
                className="w-14 h-14 object-contain bg-[#FFFFFF] rounded-3xl"
              />
              <p className="text-white text-[20px] font-bold cursor-pointer flex">
                SmartTrack &nbsp;
                <span className="sm:block hidden">
                  | Track Smarter, Rent Safer
                </span>
              </p>
            </Link>
            <div className="flex items-center max-w-7xl cursor-pointer gap-2">
            <img
              src={back} // Replace with a back icon if available
              alt="Back"
              className="w-14 h-14 object-contain bg-[#FFFFFF] rounded-3xl"
            />
            <p className="text-white text-[20px] font-bold">Back</p>
            </div>
          </div>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo1}
              alt="logo"
              className="w-14 h-14 object-contain bg-[#FFFFFF] rounded-3xl"
            />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              SmartTrack &nbsp;
              <span className="sm:block hidden">
                | Track Smarter, Rent Safer
              </span>
            </p>
          </Link>
        )}

        {/* Render nav links only if NOT in MobileGallery */}
        {!(isMobileGallery || isProjectGallery || isBehindTheSeenGallery) && (
          <>
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${!toggle ? "hidden" : "flex"
                  } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                        }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
