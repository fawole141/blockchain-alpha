import React, { useEffect, useState } from "react";
import logo from "../Assets/logo1.png";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const routesList = [
    {
      link: "#about",
      name: "About",
    },
    {
      link: "#team",
      name: "Our Team",
    },
    {
      link: "#start",
      name: "Start",
    },
    {
      link: "#faqs",
      name: "FAQ",
    },
  ];

  const [show, setShow] = useState(false);

  const scrollDirection = useScrollDirection();
  return (
    // <!-- Main navigation container -->
    <nav
      className={`sticky ${
        scrollDirection === "down"
          ? "-top-24 duration-700"
          : "top-0 duration-[1000ms]"
      } z-30 flex-no-wrap relative flex flex-col w-full items-center justify-between bg-black py-2 md:px-16 sm:px-4 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4`}
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center sm:!flex sm:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          {/* <!-- Logo --> */}
          <Link
            className="mb-4 mr-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
            to={"/"}
          >
            <img src={logo} style={{ height: "30px" }} alt="" loading="lazy" />
          </Link>
        </div>

        {/* <!-- Right elements --> */}
        <div className="relative sm:hidden md:flex items-center">
          {/* <!-- Navigation links --> */}
          <ul
            className="list-style-none mr-auto duplicate-font flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {routesList.map((route) => {
              return (
                <li
                  key={route.name}
                  className="mb-4 lg:mb-0 lg:pr-12"
                  data-te-nav-item-ref
                >
                  {/* <!-- Home link --> */}
                  <span>
                    <Link
                      className="nav__link cursor-pointer"
                      to={route.link}
                      smooth
                    >
                      <span
                        className="text-natural font-DuplicateSansThin cursor-pointer hover:text-brand-color-1 focus:text-brand-color-1 [&.active]:text-brand-color-1 hidden relative duration-1000"
                        data-link-alt={route.name}
                      >
                        <span className="cursor-pointer">{route.name}</span>
                      </span>{" "}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* <!-- Hamburger button for mobile view --> */}
        <button
          onClick={() => setShow(!show)}
          className="md:hidden border-0 bg-transparent px-2 text-natural hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              // className={`${show ? 'hidden' : 'h-7 w-7'}`}
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>


      {/* Mobile and small-screen devices (toggle Menu) */}
      <div
        id="MobileNavigation"
        className={`${show ? "block" : "hidden"} mt-4 mx-auto`}
      >
        <div className="flex flex-col  mt-4 items-center  mx-auto ">
          <ul
            className="list-style-none flex flex-col gap-4 pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {routesList.map((route) => {
              return (
                <li
                  key={route.name}
                  className="mb-4 lg:mb-0 lg:pr-12"
                  onClick={()=>setShow(!show)}
                >
                  {/* <!-- Home link --> */}
                  <span>
                    <Link
                      className="nav__link cursor-pointer"
                      to={route.link}
                      smooth
                    >
                      <span
                        className="text-natural font-DuplicateSansThin cursor-pointer hover:text-brand-color-1 focus:text-brand-color-1 [&.active]:text-brand-color-1 hidden relative duration-1000"
                        data-link-alt={route.name}
                      >
                        <span className="cursor-pointer">{route.name}</span>
                      </span>{" "}
                    </Link>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Header;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
