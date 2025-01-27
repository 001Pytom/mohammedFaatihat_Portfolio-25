import Image from "../ui/Image";
function SkillsnTools({ data, heading, className }) {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      <h2 className="text-[2rem] font-normal ">{heading}</h2>
      <ul className="flex flex-wrap gap-5 max-w-xl w-full">
        {data.map((item) => (
          <li
            key={item.id}
            className="inline-flex gap-2 items-center justify-center p-4 bg-background-box"
          >
            <Image src={item.icon} alt={item.text} />
            <p className="text-2xl">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsnTools;
