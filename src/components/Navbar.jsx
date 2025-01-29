import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../utils/helper";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="rounded-xl bg-background-body bg-opacity-[80%] fixed  lg:sticky top-8 right-0 lg:bottom-[4rem] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 max-w-max shadow-lg ">
      <ul className="hidden lg:inline-flex items-center p-6 gap-[3.88rem]  ">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={`${link.id}`}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-white opacity-[80%] !important"
              // onSetActive={(id) => console.log(`${id} is now active`)}
              className=" text-secondary  uppercase text-2xl font-light  cursor-pointer  "
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden opacity text-white  focus:outline-none p-3"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute -bottom-56 right-10 bg-background-body  bg-opacity-[80%]  rounded-lg shadow-lg  flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="text-white opacity-[80%] !important"
                className="text-secondary text-lg uppercase font-light cursor-pointer transition-all hover:opacity-80"
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
