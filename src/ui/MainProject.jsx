import Line from "./Line";
import Image from "../ui/Image";

const projectData = {
  title: "Teehat Shopping Website",
  description:
    "A sleek, React-powered e-commerce platform designed for effortless browsing and shopping.",
  stack: "React/TailwindCss",
};
function MainProject({ stack, description, title, image, alt }) {
  return (
    <div className="">
      <Line />
      <div className="flex flex-col gap-[3.75rem] items-center">
        <div className=" flex justify-between items-center mt-10 w-full ">
          <p className="text-base text-muted font-light">{stack}</p>
          <h3 className="text-5xl leading[3.5rem] tracking-[-0.12rem]  w-[31rem] max-w-full">
            {title}
          </h3>
          <p className="text-muted text-xl font-light w-[25rem] max-w-full">
            {description}
          </p>
        </div>
        {/* <div className="bg-red-500 relative w-full inset-0 h-auto"> */}
        <Image src={image} alt={alt} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default MainProject;
