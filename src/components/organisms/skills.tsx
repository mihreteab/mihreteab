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

const Skills = () => {
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
          <div className="flex flex-col gap-2 items-center">
            <div>
              <JavascriptIcon />
            </div>
            <div>Javascript</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <TypescriptIcon />
            </div>
            <div>Typescript</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <ReactIcon />
            </div>
            <div>React</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <NextIcon />
            </div>
            <div>Next.js</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <NodeIcon />
            </div>
            <div>Node.js</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <ExpressIcon />
            </div>
            <div>Express.js</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <NestIcon />
            </div>
            <div>Nest.js</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <SocketIcon />
            </div>
            <div>Socket.io</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <PostgresqlIcon />
            </div>
            <div>PostgreSQL</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <MongodbIcon />
            </div>
            <div>MongoDB</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <SassIcon />
            </div>
            <div>Sass/Scss</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <TailwindIcon />
            </div>
            <div>Tailwindcss</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <FigmaIcon />
            </div>
            <div>Figma</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <CypressIcon />
            </div>
            <div>Cypress</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <StorybookIcon />
            </div>
            <div>Storybook</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div>
              <GitIcon />
            </div>
            <div>Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
