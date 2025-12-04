import Tag from "../atoms/tag";
import WorkCard from "../molecuels/worKCard";
import type { Work } from "@/libs/types";

type WorksProps = {
  data: Work[];
};

const Works = ({ data }: WorksProps) => {
  return (
    <div
      id="works"
      className="flex justify-center px-4 py-[64px] md:py-[96px] md:px-[80px]"
    >
      <div className="flex flex-col gap-6 md:px-8 md:gap-[48px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center">
            <Tag>Works</Tag>
          </div>
          <div className="subtitle-normal md:subtitle-normal-desk">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        {data.map((work, index) => (
          <WorkCard work={work} key={index} picRight={index % 2 === 1} />
        ))}
      </div>
    </div>
  );
};

export default Works;
