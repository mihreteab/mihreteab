import Tag from "../atoms/tag";
import ExperienceCard from "../molecuels/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="py-[64px] px-4 bg-secondary-background md:px-[80px] md:py-[96px]"
    >
      <div className="flex flex-col gap-6 md:px-[32px] md:gap-[48px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center">
            <Tag>Experience</Tag>
          </div>
          <div className="text-center subtitle-normal-desk text-secondary-foreground">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
