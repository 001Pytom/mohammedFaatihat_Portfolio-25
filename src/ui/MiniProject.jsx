import Line from "../ui/Line";
import Image from "../ui/Image";
function MiniProject({
  leftTitle,
  rightTitle,
  leftImage,
  rightImage,
  leftStack,
  rightStack,
  leftalt = "",
  rightalt = "",
}) {
  return (
    <div>
      <Line width="58rem" />
      <div className="flex justify-between items-center w-full gap-[3.75rem] mt-10">
        <div className="flex flex-col gap-[3.75rem] justify-center">
          <div className="flex flex-col gap-6">
            <p className="text-muted text-base font-light">{leftStack}</p>
            <h3 className="text-5xl tracking-[-0.12rem]">{leftTitle}</h3>
          </div>
          <Image src={leftImage} alt={leftalt} />
        </div>
        <div className="flex flex-col gap-[3.75rem] justify-center">
          <p className="text-muted text-base font-light">{rightStack}</p>
          <h3 className="text-5xl tracking-[-0.12rem]">{rightTitle}</h3>
          <Image src={rightImage} alt={rightalt} />
        </div>
      </div>
    </div>
  );
}

export default MiniProject;
