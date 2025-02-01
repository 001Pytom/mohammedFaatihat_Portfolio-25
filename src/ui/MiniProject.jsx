import { motion } from "framer-motion";
import Line from "../ui/Line";
import Image from "../ui/Image";
import ButtonView from "./ButtonView";

function MiniProject({ leftItem, rightItem }) {
  const items = [leftItem, rightItem];

  const overlayVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <Line width="58rem" />
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full gap-10 md:gap-[3.75rem] mt-10 xl:px-20 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[3.75rem] justify-center"
          >
            <div className="flex flex-col gap-6">
              <p className="text-muted text-base font-light">{item.stack}</p>
              <h3 className="text-4xl lg:text-5xl tracking-[-0.12rem]">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.alt || ""}
                  className="rounded-lg"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileHover="visible"
                whileTap="visible"
                variants={overlayVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg"
              >
                <motion.a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View details about ${item.title}`}
                >
                  <ButtonView />
                </motion.a>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniProject;
