import { motion } from "framer-motion";
import Line from "./Line";
import Image from "../ui/Image";
import ButtonView from "./ButtonView";

function MainProject({ stack, description, title, image, alt, link }) {
  const overlayVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Line />
      <div className="flex flex-col gap-[3.75rem] items-center">
        <div className="flex justify-between items-end mt-10 w-full ">
          <div className="flex flex-col gap-6 justify-end xl:flex-row  sm:w-1/2 xl:w-3/5 xl:justify-between xl:items-end ">
            <p className="text-base text-muted font-light">{stack}</p>
            <h3 className="text-4xl lg:text-5xl tracking-[-0.12rem] leading-[3.5rem]  md:w-[20rem] lg:w-[31rem] max-w-full">
              {title}
            </h3>
          </div>
          <p className="hidden md:inline-flex text-muted text-xl font-light w-[25rem] max-w-full ">
            {description}
          </p>
        </div>

        <div className="relative w-full h-full group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <Image src={image} alt={alt} className="rounded-lg w-full h-auto" />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg"
            variants={overlayVariants}
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.a
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View details about ${title}`}
            >
              <ButtonView />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MainProject;
