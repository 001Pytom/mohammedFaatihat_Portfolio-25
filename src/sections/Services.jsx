import SkillsnTools from "../ui/SkillsnTools";

import { listOfSkills, listOfTools } from "../utils/helper";

function Services() {
  return (
    <section id="services" className="py-20 px-28 flex gap-12 justify-between">
      <SkillsnTools data={listOfTools} heading={"My Tools"} />
      <div className="h-44 bg-secondary w-[0.05rem] inline-flex self-center "></div>
      <SkillsnTools
        data={listOfSkills}
        heading={"My Skills"}
        className="pl-10"
      />
    </section>
  );
}

export default Services;
