import { listOfSocials } from "../utils/helper";
import Image from "../ui/Image";

function Contact() {
  return (
    <footer
      id="contact"
      className="py-[5rem] px-10 lg:px-20 xl:px-28 flex flex-col gap-12"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <h2 className="text-5xl font-normal  tracking-[-0.02em] w-full max-w-[31rem]">
          Get in Touch
        </h2>
        <p className="font-light text-xl text-muted w-full md:max-w-[29rem]">
          Let's get in touch! <br /> Thank you for the visit! Feel free to
          contact me regarding any kind of projects, collaborations, or if you
          just want to say hello.
        </p>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-6 lg:gap-12 justify-between items-center">
          {listOfSocials.map((link) => (
            <li key={link.id} className="flex gap-2 items-center">
              <Image src={link.icon} alt={link.text} />
              <a
                href={link.link}
                target={link.target}
                className="text-primary font-geist  sm:text-2xl  opacity-80 hover:opacity-100 transition-opacity"
                aria-label={link.text}
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Contact;
