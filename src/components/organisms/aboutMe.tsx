import Image from "next/image";
import Tag from "../atoms/tag";
import type { AboutMeData } from "@/libs/types";

type AboutMeProps = {
  data: AboutMeData;
};

const AboutMe = ({ data }: AboutMeProps) => {
  return (
    <div
      id="about"
      className="bg-secondary-background py-[64px] px-4 md:px-[80px] md:py-[96px]"
    >
      <div className="flex flex-col gap-6 md:px-8">
        <div className="flex justify-center">
          <Tag>About me</Tag>
        </div>
        <div className="flex flex-col md:flex-row gap-[48px]">
          <div className="flex justify-center flex-1">
            <div className="relative flex justify-center">
              <div className="absolute w-[320px] h-[360px] md:w-[400px] md:h-[480px] p-2 top-[20px] md:top-[40px] md:right-[40px]">
                <div className="bg-gray-200 dark:bg-[#374151] h-[360px] md:h-[480px] w-full rounded-[20px] md:rounded-[12px]"></div>
              </div>
              <Image
                width={280}
                height={360}
                src="/images/pic.jpg"
                className="z-1 md:w-[400px] md:h-[480px] object-cover rounded-[12px]"
                alt="About picture"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 text-secondary-foreground body2-normal">
            <div className="text-foreground heading-h3-semi-bold">
              {data.heading}
            </div>
            <div className="flex flex-col gap-4">
              {data.paragraphs.map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))}
              <div>Finally, some quick bits about me.</div>
              <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  {data.bulletsLeft.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-[10px]">
                  {data.bulletsRight.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
