import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="fixed top-0 z-50 w-full">
      <header className={colorChange && 'backdrop-blur bg-slate-900/40 border-b border-gray-700'}>
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                className="block text-2xl md:text-3xl font-semibold text-white"
                to="/"
              >
                OneConnect
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-white px-5 py-2.5 text-md font-medium text-primary"
                    to="/wallet"
                  >
                    Wallet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
