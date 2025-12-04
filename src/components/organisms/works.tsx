import Tag from "../atoms/tag";
import WorkCard from "../molecuels/worKCard";

const Works = () => {
  const works = [
    {
      title: "Koalo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      picture: "/images/koalo.png",
      url: "https://koalo.koalo.app/en",
      techStacks: [
        "React",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "Koalo Studio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      url: "https://koalo-web-editor-dev.web.app/studio",
      picture: "/images/koalo-studio.png",

      techStacks: [
        "React",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "Stereopark",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      picture: "/images/stereopark.png",
      url: "https://stereopark-web-development.vercel.app/",
      techStacks: [
        "React",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];

  return (
    <div id="works" className="px-4 py-[64px] md:py-[96px] md:px-[80px]">
      <div className="flex flex-col gap-6 md:px-8 md:gap-[48px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center">
            <Tag>Works</Tag>
          </div>
          <div className="subtitle-normal md:subtitle-normal-desk">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        {works.map((work, index) => (
          <WorkCard work={work} key={index} picRight={index % 2 == 1} />
        ))}
      </div>
    </div>
  );
};

export default Works;
