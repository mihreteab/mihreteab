import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../atoms/githubIcon";
import XIcon from "../atoms/xIcon";
import LinkedInIcon from "../atoms/linkedInIcon";
import LocationIcon from "../atoms/locationIcon";
import { HeroType } from "@/libs/types";

type HeroProps = {
  data: HeroType;
};

const Hero = ({ data }: HeroProps) => {
  return (
    <div className="px-4 py-[132px] md:px-[80px] md:py-[164px]">
      <div className="flex flex-col-reverse md:flex-row md:px-[32px] gap-[48px]">
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-2">
            <div className="heading-semi-bold md:heading-bold text-foreground">
              {data.title}
            </div>
            <div className="body2-normal text-gray-600 dark:text-[#D1D5DB]">
              {data.description}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-600 dark:text-[#D1D5DB]">
            <div className="flex gap-2">
              <LocationIcon />
              <div className="body2-normal">{data.location}</div>
            </div>
            <div className="flex gap-2">
              <div className="flex justify-center items-center h-6 w-6">
                <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
              </div>
              <div className="body2-normal">{data.availability}</div>
            </div>
          </div>
          <div className="flex text-gray-600 dark:text-[#D1D5DB]">
            <Link href={data.socials.github}>
              <GithubIcon />
            </Link>
            <Link href={data.socials.x}>
              <XIcon />
            </Link>
            <Link href={data.socials.linkedin}>
              <LinkedInIcon />
            </Link>
          </div>
        </div>
        <div className="md:w-[400px] shrink-0 flex justify-center md:justify-end">
          <div className="relative flex justify-center md:block h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <div className="absolute bottom-[10px] md:bottom-0 right-[10px] md:right-0 left-[10px] md:left-[40px] h-[260px] w-[260px] md:h-[320px] md:w-[280px] bg-gray-200 dark:bg-[#374151] z-[-1] rounded-[20px] md:rounded-[12px]"></div>
            <Image
              height={280}
              width={240}
              alt="profile"
              src="/images/profile.jpg"
              className="h-[280px] w-[240px] md:h-[320px] md:w-[280px] object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
