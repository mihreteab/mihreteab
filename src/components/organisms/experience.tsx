import Tag from "../atoms/tag";
import ExperienceCard from "../molecuels/ExperienceCard";

const Experience = () => {
  return (
    <div className="py-[64px] px-4 bg-secondary-background md:px-[80px] md:py-[96px]">
      <div className="flex flex-col gap-6 md:px-[32px] md:gap-[48px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center">
            <Tag>Experience</Tag>
          </div>
          <div className="text-center subtitle-normal-desk text-secondary-foreground">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
