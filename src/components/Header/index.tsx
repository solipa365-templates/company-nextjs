"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => setOpenIndex(openIndex === index ? -1 : index);

  const pathname = usePathname();

  return (
    <header
      className={`top-0 left-0 z-40 w-full transition ${
        sticky
          ? "fixed bg-white/80 backdrop-blur-xs shadow-sticky dark:bg-gray-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex h-20 items-center px-4">

          {/* LOGO */}
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/logo-2.png"
                alt="logo"
                width={140}
                height={50}
                className="dark:hidden h-auto"
              />
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={140}
                height={50}
                className="hidden dark:block w-15 h-auto max-h-15"
              />
            </Link>
          </div>

          {/* MENU CENTRAL */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav>
              <ul className="flex space-x-15 whitespace-nowrap">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex items-center py-2 text-base lg:py-6 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="25" height="24" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </p>

                        {/* SUBMENU ORIGINAL */}
                        <div
                          className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, i) => (
                            <Link
                              key={i}
                              href={submenuItem.path}
                              className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* BOTÕES + THEME */}
          <div className="flex flex-1 justify-end items-center gap-4 pr-16 lg:pr-0">
            <Link
              href="/signin"
              className="hidden md:block text-base font-medium text-dark hover:opacity-70 dark:text-white"
            >
              Entrar
            </Link>

            <Link
              href="/signup"
              className="hidden md:block rounded-xs bg-primary px-6 py-3 text-base font-medium text-white shadow-btn transition hover:bg-primary/90"
            >
              Registrar
            </Link>

            {/* BOTÃO MOBILE ORIGINAL */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="lg:hidden ring-primary relative rounded-lg px-3 py-[6px]"
            >
              <span
                className={`block my-1.5 h-0.5 w-[30px] bg-black transition dark:bg-white ${
                  navbarOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block my-1.5 h-0.5 w-[30px] bg-black transition dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block my-1.5 h-0.5 w-[30px] bg-black transition dark:bg-white ${
                  navbarOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>

            <ThemeToggler />
          </div>

          {/* NAV MOBILE ORIGINAL */}
          <nav
            id="navbarCollapse"
            className={`lg:hidden absolute right-0 z-30 w-[250px] rounded border border-body-color/20 bg-white px-6 py-4 transition dark:bg-dark ${
              navbarOpen ? "visible top-full opacity-100" : "invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="flex flex-col space-y-4">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className="block text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="flex justify-between items-center cursor-pointer text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                      >
                        {menuItem.title}
                      </p>
                      <div className={`pl-4 ${openIndex === index ? "block" : "hidden"}`}>
                        {menuItem.submenu.map((submenuItem, i) => (
                          <Link
                            key={i}
                            href={submenuItem.path}
                            className="block py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
