import Image from "../ui/Image";
import FaatihatImage from "../assets/faatihat.png";
import { Link } from "react-scroll";

function About() {
  return (
    <section id="about" className="py-12 px-28">
      <div className="flex flex-col gap-20 items-center self-stretch">
        <header className="flex w-full">
          <div className="flex-1 text-center text-2xl uppercase tracking-[0.12rem] font-light ">
            Faatihat Mohammed
          </div>
          <Link to="/" className=" underline cursor-pointer">
            Resume
          </Link>
        </header>

        <div className="">
          <h1 className="text-[5rem] font-normal tracking-[-0.02em] uppercase  text-center">
            <span className="text-secondary"> Creative</span> <br />
            Front-end Developer
          </h1>
        </div>

        <div className="flex justify-between items-center w-full">
          <Image src={FaatihatImage} alt="Faatihat Mohammed" />
          <p className="text-muted text-xl font-light w-[36rem] max-w-full">
            I’m Faatihat, a front-end developer who builds seamless, interactive
            web experiences. From dynamic applications with React to clean,
            efficient designs with Tailwind CSS, my focus is on creating
            functional, visually engaging, and user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
