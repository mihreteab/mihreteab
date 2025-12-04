import Image from "next/image";
import TechTag from "./techTag";
import OpenIcon from "../atoms/openIcon";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { Work } from "@/libs/types";

export type WorkCardProps = {
  picRight?: boolean;
  work: Work;
};

const WorkCard = ({ picRight, work }: WorkCardProps) => {
  return (
    <div className="rounded-[12px] drop-shadow-md bg-[#ffffff] dark:bg-[#1F2937] md:flex">
      <div
        className={cn(
          "bg-secondary-background dark:bg-[#374151] p-8 flex justify-center items-center border border-gray-100 dark:border-[#1F2937] md:p-[48px] flex-1 rounded-t-[12px] md:rounded-t-none md:rounded-l-[12px]",
          picRight && "md:order-last md:rounded-l-none md:rounded-r-[12px]"
        )}
      >
        <Image
          width={279}
          height={192}
          src={work.picture}
          alt="work image"
          className="object-cover drop-shadow-lg w-full rounded-[12px]"
        />
      </div>
      <div className="flex flex-col gap-6 p-8 flex-1 md:p-[48px]">
        <div className="subtitle-semi-bold-tab md:subtitle-semi-bold-desk text-foreground">
          {work.title}
        </div>
        <div className="body2-normal text-secondary-foreground">
          {work.description}
        </div>
        <div className="flex gap-2 flex-wrap">
          {work?.techStacks?.map((teckStack, index) => (
            <TechTag stack={teckStack} key={index} />
          ))}
        </div>
        <div>
          <Link
            target="_blank"
            href={work.url}
            className="h-9 w-9 flex justify-center items-center text-secondary-foreground"
          >
            <OpenIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
