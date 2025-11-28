import Image from "next/image";
import TechTag from "./techTag";
import OpenIcon from "../atoms/openIcon";
import { cn } from "@/libs/utils";

const WorkCard = ({ picRight }: { picRight?: boolean }) => {
  return (
    <div className="rounded-[12px] bg drop-shadow-md bg-[#ffffff] md:flex">
      <div
        className={cn(
          "bg-gray-50 p-8 flex justify-center items-center border border-gray-100 md:p-[48px] flex-1 rounded-t-[12px] md:rounded-t-none md:rounded-l-[12px]",
          picRight && "md:order-last md:rounded-l-none md:rounded-r-[12px]"
        )}
      >
        <Image
          width={279}
          height={192}
          src="/images/work.png"
          alt="work image"
          className="object-cover drop-shadow-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-6 p-8 flex-1 md:p-[48px]">
        <div className="subtitle-semi-bold-tab md:subtitle-semi-bold-desk">
          Fiskil
        </div>
        <div className="body2-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="flex gap-2 flex-wrap">
          <TechTag stack="React" />
          <TechTag stack="Next.js" />
          <TechTag stack="Typescript" />
          <TechTag stack="Nest.js" />
          <TechTag stack="PostgreSQL" />
          <TechTag stack="Tailwindcss" />
          <TechTag stack="Figma" />
          <TechTag stack="Cypress" />
          <TechTag stack="Storybook" />
          <TechTag stack="Git" />
        </div>
        <div>
          <button className="h-9 w-9 flex justify-center items-center">
            <OpenIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
