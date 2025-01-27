import eCommerce from "../assets/ecommerce.png";
import MainProject from "../ui/MainProject";
import worldwise from "../assets/worldwise.png";
import prevPortfolio from "../assets/portf.png";
import reactQuiz from "../assets/reactQuiz.png";
import memoryGame from "../assets/memoryGame.png";
import chatGptUi from "../assets/chatgptUi.png";
import MiniProject from "../ui/MiniProject";
import lalasia from "../assets/lalasia.png";
function Projects() {
  return (
    <section id="projects" className="p-20 flex flex-col gap-20 items-center">
      <MainProject
        stack="React/TailwindCss"
        image={lalasia}
        alt={"Lalasia Furniture Website"}
        title="Lalasia Furniture Website"
        description="A website that allows usrs to choose buy any furniture from the comfort of their home."
      />

      <MainProject
        stack="React/TailwindCss"
        image={eCommerce}
        alt={"Teehat Shopping Website"}
        title="Teehat Shopping Website"
        description="A sleek, React-powered e-commerce platform designed for effortless browsing and shopping."
      />
      <MiniProject
        leftStack="HTML/JAVASCRIPT/TAILWINDCSS"
        rightStack="React/CSS"
        leftTitle="First Portfolio"
        rightTitle="ReactQuiz"
        leftImage={prevPortfolio}
        rightImage={reactQuiz}
        leftalt="Portfolio image"
        rightalt="react quiz"
      />

      <MainProject
        stack="React/TailwindCss"
        image={worldwise}
        alt={"Worldwise travel app image"}
        title="World Wise WebApp"
        description="An app for curious explorers, combining geography and data visualization to present insightful world facts."
      />

      <MiniProject
        leftStack="React/TailwindCss"
        rightStack="Next.Js /TailwindCss"
        leftTitle="Memory Game"
        rightTitle="ChatGPT-Like Interface"
        leftImage={memoryGame}
        rightImage={chatGptUi}
        leftalt="Memory Game"
        rightalt="ChatGPT-Like Interfacez"
      />
    </section>
  );
}

export default Projects;
