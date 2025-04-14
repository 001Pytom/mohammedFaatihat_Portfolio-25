import Image from "../ui/Image";
import FaatihatImage from "../assets/faatihat.png";

function About() {
  return (
    <section id="about" className="py-12 px-10 lg:px-20 xl:px-28">
      <div className="flex flex-col gap-10 md:gap-20 items-center self-stretch">
        <header className="flex w-full ">
          <div className="flex-1 text-center md:text-2xl uppercase tracking-[0.12rem] font-light ">
            Faatihat Mohammed
          </div>
          <a
            href="https://drive.google.com/file/d/1lsoCC1Zh1TZMvWEEp87ALoCY4SbLNccg/view?usp=sharing"
            className=" underline cursor-pointer mr-10"
            rel="noopener noreferrer"
            aria-label="Resume"
            target="_blank"
          >
            Resume
          </a>
        </header>

        <div className="">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-normal tracking-[-0.02em] uppercase  text-center">
            <span className="text-secondary"> Creative</span> <br />
            Front-end Developer
          </h1>
        </div>

        <div className="flex  flex-col-reverse md:flex-row justify-between items-center text-center md:text-start w-full gap-10 md:gap-20 xl:gap-0">
          <Image src={FaatihatImage} alt="Faatihat Mohammed" />
          <p className="text-muted text-sm sm:text-base  md:text-lg lg:text-xl font-light  w-[36rem] max-w-full">
            I’m Faatihat, a front-end developer who builds seamless, interactive
            web experiences. From dynamic applications with React, Next.js to clean,
            efficient designs with Tailwind CSS, my focus is on creating
            functional, visually engaging, and user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
