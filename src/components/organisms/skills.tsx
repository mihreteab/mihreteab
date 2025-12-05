import CypressIcon from "../atoms/cypressIcon";
import ExpressIcon from "../atoms/expressIcon";
import FigmaIcon from "../atoms/figmaIcon";
import GitIcon from "../atoms/gitIcon";
import JavascriptIcon from "../atoms/javascriptIcon";
import MongodbIcon from "../atoms/mongodbIcon";
import NestIcon from "../atoms/nestIcon";
import NextIcon from "../atoms/nextIcon";
import NodeIcon from "../atoms/nodeIcon";
import PostgresqlIcon from "../atoms/postgresqlIcon";
import ReactIcon from "../atoms/reactIcon";
import SassIcon from "../atoms/sassIcon";
import SocketIcon from "../atoms/socketIcon";
import StorybookIcon from "../atoms/storybookIcon";
import Tag from "../atoms/tag";
import TailwindIcon from "../atoms/tailwindIcon";
import TypescriptIcon from "../atoms/typeScriptIcon";
import SkillWrapper from "../molecuels/skillWrapper";

const Skills = () => {
  const skills = [
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
      link: "https://www.javascript.com/",
    },
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      icon: <ReactIcon />,
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: <NextIcon />,
      link: "https://nextjs.org/",
    },
    {
      name: "Node.js",
      icon: <NodeIcon />,
      link: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: <ExpressIcon />,
      link: "https://expressjs.com/",
    },
    {
      name: "Nest.js",
      icon: <NestIcon />,
      link: "https://nestjs.com/",
    },
    {
      name: "Socket.io",
      icon: <SocketIcon />,
      link: "https://socket.io/",
    },
    {
      name: "PostgreSQL",
      icon: <PostgresqlIcon />,
      link: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      icon: <MongodbIcon />,
      link: "https://www.mongodb.com/",
    },
    {
      name: "SassSass/Scss",
      icon: <SassIcon />,
      link: "https://sass-lang.com/",
    },
    {
      name: "Sass/Scss",
      icon: <SassIcon />,
      link: "https://sass-lang.com/",
    },
    {
      name: "Tailwindcss",
      icon: <TailwindIcon />,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
      link: "https://www.figma.com/",
    },
    {
      name: "Cypress",
      icon: <CypressIcon />,
      link: "https://www.cypress.io/",
    },
    {
      name: "Storybook",
      icon: <StorybookIcon />,
      link: "https://storybook.js.org/",
    },
    {
      name: "Git",
      icon: <GitIcon />,
      link: "https://git-scm.com/",
    },
  ];

  return (
    <div id="skills" className="py-[64px] px-4 md:px-[80px] md:py-[96px]">
      <div className="flex flex-col gap-6 md:px-[32px] md:gap-[48px]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Tag content="Skills" />
          </div>
          <div className="text-center text-secondary-foreground">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-8 text-secondary-foreground">
          {skills.map((skill, index) => (
            <SkillWrapper skill={skill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
