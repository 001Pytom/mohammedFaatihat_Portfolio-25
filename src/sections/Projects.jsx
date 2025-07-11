import eCommerce from "../assets/ecommerce.png";
import MainProject from "../ui/MainProject";
import worldwise from "../assets/worldwise.png";
import prevPortfolio from "../assets/portf.png";
import reactQuiz from "../assets/reactQuiz.png";
import memoryGame from "../assets/memoryGame.png";
import chatGptUi from "../assets/chatgptUi.png";
import MiniProject from "../ui/MiniProject";
import lalasia from "../assets/lalasia.png";
import techielove from "../assets/techielove.png";
import nestft from "../assets/nestft.png";
import ticketGenerator from "../assets/ticketGenerator.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-10 md:px-20 space-y-20  relative"
    >
      <MainProject
        stack="Next.js/TypeScript/TailwindCss"
        image={nestft}
        alt={"nestft"}
        title="NestFT.dev"
        description="A  development platform where developers work on real-world projects, get AI-graded feedback , gain real-life experinece and grow thier tech career."
        link="https://nest-ft-dev.vercel.app/"
      />
      <MainProject
        stack="Next.js/TypeScript/TailwindCss"
        image={techielove}
        alt={"Techies Match"}
        title="Techies Match"
        description="Contributed to a high-performing team, Techies Match, in building a Progressive Web App (PWA) and functional landing pages designed to help tech professionals connect and find love. (Click 'Get Started' on the landing page to explore the app.)"
        link="https://lalasia-furniture.vercel.app/"
      />
      <MainProject
        stack="React/TailwindCss"
        image={lalasia}
        alt={"Lalasia Furniture Website"}
        title="Lalasia Furniture Website"
        description="A website that allows users to choose / buy any furniture from the comfort of their home. (currently under development) "
        link="https://lalasia-furniture.vercel.app/"
      />

      <MainProject
        stack="React/TailwindCss"
        image={eCommerce}
        alt={"Teehat Shopping Website"}
        title="Teehat Shopping Website"
        description="A sleek, React-powered e-commerce platform designed for effortless browsing and shopping."
        link="https://shooping-website.vercel.app/"
      />
      <MainProject
        stack="React/TailwindCss"
        image={ticketGenerator}
        alt={"Conference Ticket Generator"}
        title="Conference Ticket Generator"
        description="A user-friendly React app for generating  conference tickets."
        link="https://hng-12-conference-ticket-generator-2.vercel.app/"
      />
      <MiniProject
        leftItem={{
          stack: "Html/JavaScript/TailwindCss",
          title: "First Portfolio",
          image: prevPortfolio,
          alt: "Portfolio image",
          link: "https://faatihat.vercel.app/",
        }}
        rightItem={{
          stack: "React/CSS",
          title: "ReactQuiz",
          image: reactQuiz,
          alt: "react quiz",
          link: "https://shorturl.at/HPuHh",
        }}
      />

      <MainProject
        stack="React/TailwindCss"
        image={worldwise}
        alt={"Worldwise travel app image"}
        title="World Wise WebApp"
        description="An app for curious explorers, combining geography and data visualization to present insightful world facts."
        link="https://world-wise-seven-mu.vercel.app/"
      />

      <MiniProject
        leftItem={{
          stack: "React/TailwindCss",
          title: "Memory Game",
          image: memoryGame,
          alt: "Memory Game",
          link: "https://memory-game-blat.vercel.app/",
        }}
        rightItem={{
          stack: "Next.Js /TailwindCss",
          title: "ChatGPT-Like Interface",
          image: chatGptUi,
          alt: "ChatGPT-Like Interface",
          link: "https://chat-gpt-like-interfcae-eth3.vercel.app/",
        }}
      />
    </section>
  );
}

export default Projects;
