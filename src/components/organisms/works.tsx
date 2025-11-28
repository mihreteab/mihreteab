import Tag from "../atoms/tag";
import WorkCard from "../molecuels/worKCard";

const Works = () => {
  return (
    <div className="px-4 py-[64px] md:py-[96px] md:px-[80px]">
      <div className="flex flex-col gap-6 md:px-8 md:gap-[48px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center">
            <Tag>Works</Tag>
          </div>
          <div className="subtitle-normal md:subtitle-normal-desk">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <WorkCard />
        <WorkCard picRight={true} />
        <WorkCard />
      </div>
    </div>
  );
};

export default Works;
