import { Link } from "react-scroll";

const navLinks = [
  {
    id: "about",
    text: "About",
  },
  {
    id: "projects",
    text: "Projects",
  },
  {
    id: "services",
    text: "Services",
  },
  {
    id: "contact",
    text: "Contact",
  },
];
function Navbar() {
  return (
    <nav className="rounded-xl bg-background-body bg-opacity-[80%]  sticky bottom-[4rem] left-1/2 transform -translate-x-1/2 z-10 max-w-max">
      <ul className="inline-flex items-center p-6 gap-[3.88rem]  ">
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
    </nav>
  );
}

export default Navbar;
