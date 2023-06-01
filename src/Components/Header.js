import React from "react";
import logo from "../Assets/logo1.png"
import {HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    // <!-- Main navigation container -->
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-black py-2 px-16 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
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
              className="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          {/* <!-- Logo --> */}
          <Link
            className="mb-4 mr-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
            to={"/"}
          >
            <img
              src={logo}
              style={{ height: "30px" }}
              alt=""
              loading="lazy"
            />
          </Link>
        </div>

        {/* <!-- Right elements --> */}
        <div className="relative flex items-center">
          {/* <!-- Navigation links --> */}
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              {/* <!-- Home link --> */}
              <Link
                className="text-natural hover:text-brand-color-1 focus:text-brand-color-1 [&.active]:text-brand-color-1"
                to="/"
                smooth
              >
                Home
              </Link>
            </li>
            {/* <!-- Team link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-natural hover:text-brand-color-1 focus:text-brand-color-1 lg:px-2 [&.active]:text-brand-color-1"
                to="#about"
                smooth
              >
                About
              </Link>
            </li>
            {/* <!-- Our Team link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-natural hover:text-brand-color-1 focus:text-brand-color-1 lg:px-2 [&.active]:text-brand-color-1"
                to="#teams"
                smooth
              >
                Our Team
              </Link>
            </li>

            {/* <!-- Start link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-natural hover:text-brand-color-1 focus:text-brand-color-1 lg:px-2 [&.active]:text-brand-color-1"
                to="#start"
                smooth
              >
                Start
              </Link>
            </li>

            {/* <!-- FAQ link --> */}
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-natural hover:text-brand-color-1 focus:text-brand-color-1 lg:px-2 [&.active]:text-brand-color-1"
                to="#faqs"
                smooth
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
