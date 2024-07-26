import { useEffect, useState } from "react";
import "./Navbar.css";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";

const nav_links = [
  { name: "O Nas", to: "#o_nas" },
  { name: "Opinie", to: "#opinie" },
  { name: "Oferta", to: "#oferta" },
];

function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navHidden, setNavHidden] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }

    setLastScrollY(window.scrollY);
  };

  return (
    <>
      <header
        className={`fixed w-full ${
          navHidden && !navOpen ? "-top-36" : "top-0"
        } left-0 bg-blue-dark flex justify-between items-center h-32 z-50 transition-all duration-150 ease-in`}
      >
        <a
          href="#"
          className="flex items-center gap-4 select-none pl-2 sm:pl-5 py-2 md:pl-4 scale-90 sm:scale-100"
        >
          <img
            src="/logo.webp"
            alt="Logo Melody Mastery"
            className="h-20 brightness-110 border border-gold-base rounded-full"
          />
          <div className="flex flex-col text-gold-base italic font-semibold">
            <span className="text-5xl tracking-wide">MELODY</span>
            <span className="text-3xl tracking-[.3em]">MASTERY</span>
          </div>
        </a>
        <nav className="hidden md:flex h-full gap-3 text-3xl lg:text-4xl font-semibold text-gold-base">
          {nav_links.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`flex justify-center items-center hover:bg-blue-medium px-6 ${
                location.hash == link.to ? "border-b-4 border-white" : ""
              } transition-all`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="https://forms.gle/MqChpUv6838K8W967"
          target="_blank"
          onClick={() => setNavOpen(!navOpen)}
          className="hidden text-4xl text-gold-base font-semibold py-2 px-6 md:px-8 md:flex justify-center items-center h-full hover:bg-blue-medium"
        >
          ZAPISZ SIĘ
        </a>

        {/* burger menu */}
        <label htmlFor="check" className="md:hidden scale-[65%]">
          <input
            type="checkbox"
            id="check"
            checked={navOpen}
            onChange={() => setNavOpen(!navOpen)}
          />
          <span className="bg-gold-base"></span>
          <span className="bg-gold-base"></span>
          <span className="bg-gold-base"></span>
        </label>
      </header>

      {/* open mobile navbar */}
      {navOpen ? (
        <div className="md:hidden mobileMenuOpen fixed w-full top-0 bottom-0 z-50 bg-gradient-to-b from-blue-dark to-blue-medium flex flex-col justify-between mt-32 p-4">
          {/* nav links */}
          <div className="w-full flex justify-center items-center mt-24">
            <nav className="gap-8 text-3xl lg:text-4xl font-semibold text-gold-base flex flex-col w-11/12">
              {nav_links.map((link) => (
                // <CustomBorder>
                <a
                  key={link.name}
                  href={link.to}
                  onClick={() => setNavOpen(!navOpen)}
                  className="flex justify-between items-center pl-2 border-b border-gold-base"
                >
                  <span className="text-4xl">{link.name}</span>
                  <ArrowRightIcon
                    className={`h-14 ${
                      link.to == location.hash ? "-rotate-45" : ""
                    }`}
                  />
                </a>
                // </CustomBorder>
              ))}
            </nav>
          </div>
          <a
            href="https://forms.gle/MqChpUv6838K8W967"
            target="_blank"
            onClick={() => setNavOpen(!navOpen)}
            className="text-4xl sm:text-5xl text-white font-bold w-11/12 mx-auto"
          >
            <div className="w-full py-6 flex items-center text-gold-base justify-center gap-4 border-b border-gold-base">
              <span className="text-center max-w-fit ">ZAPISZ SIĘ</span>
              <ChevronRightIcon className="h-16 sm:h-20 translate-y-1" />
            </div>
          </a>
          <div className="flex items-center justify-between w-full">
            <ul className="flex items-center gap-2 flex-grow">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61560212337164"
                  target="_blank"
                >
                  <svg
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 fill-gray-300"
                  >
                    <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/melodymastery_/"
                  target="_blank"
                >
                  <svg
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="h-12 fill-gray-300"
                  >
                    <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z" />
                  </svg>
                </a>
              </li>
              <li className="flex-grow text-center flex flex-wrap items-center justify-around gap-2">
                <a
                  href="mailto: melodymastery@kontakt.pl"
                  className="text-xl sm:text-2xl font-semibold text-gray-300 flex-grow"
                >
                  melodymastery@kontakt.pl
                </a>
                <a
                  href="tel:+48733878770"
                  className="text-xl sm:text-2xl font-semibold text-gray-300 flex-grow"
                >
                  +48 733 878 770
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      {/* go to start button */}
      <a
        href="#"
        className={`transition-all border-2 border-gold-base ${
          lastScrollY > 100 ? "opacity-1" : "opacity-0"
        } fixed bottom-10 right-10 bg-blue-dark rounded-full p-5 transition-all duration-300 ease-linear z-40`}
      >
        <ArrowUpIcon className="h-14 text-gold-base" />
      </a>
    </>
  );
}

export default Navbar;
