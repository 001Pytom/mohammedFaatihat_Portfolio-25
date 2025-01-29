import SkillsnTools from "../ui/SkillsnTools";

import { listOfSkills, listOfTools } from "../utils/helper";

function Services() {
  return (
    <section
      id="services"
      className="py-20 px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row gap-12 justify-between"
    >
      <SkillsnTools data={listOfTools} heading={"My Tools"} />
      <div className="h-44 bg-secondary w-[0.05rem] self-center hidden lg:inline-flex"></div>
      <SkillsnTools
        data={listOfSkills}
        heading={"My Skills"}
        className="lg:pl-10"
      />
    </section>
  );
}

export default Services;
