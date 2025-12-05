"use client";

import Link from "next/link";
import CopyIcon from "../atoms/copyIcon";
import GithubIcon from "../atoms/githubIcon";
import LinkedInIcon from "../atoms/linkedInIcon";
import MailIcon from "../atoms/mailIcon";
import PhoneIcon from "../atoms/phoneIcon";
import Tag from "../atoms/tag";
import XIcon from "../atoms/xIcon";
import { HeroType } from "@/libs/types";

const GetInTouch = ({ data }: { data: HeroType }) => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <div
      id="contact"
      className="px-4 py-16 md:px-20 md:py-24 text-secondary-foreground"
    >
      <div className="flex flex-col gap-6 md:px-8 md:gap-12">
        <div className="flex flex-col gap-4 items-center">
          <Tag>Get in touch</Tag>
          <div className="subtitle-normal-desk text-center">
            What&apos;s next? Feel free to reach out to me if you&apos;re
            looking for <br />a developer, have a query, or simply want to
            connect.
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-4 items-center">
            <button
              className="md:p-1.5 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "mailto:mihreteabdemeke@gmail.com?subject=Let%27s%20Connect&body=Hi%20Mihreteab,%20I%20saw%20your%20portfolio...")
              }
            >
              <MailIcon className="md:h-8 md:w-8" />
            </button>
            <div className="heading-h2-semi-bold-tab md:heading-h2-semi-bold-desk text-foreground">
              mihreteabdemeke@gmail.com
            </div>
            <button
              className="md:p-1.5 cursor-pointer"
              onClick={() => handleCopy("mihreteabdemeke@gmail.com")}
            >
              <CopyIcon className="md:h-8 md:w-8" />
            </button>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <button
              className="md:p-1.5 cursor-pointer"
              onClick={() => (window.location.href = "tel:+251916353625")}
            >
              <PhoneIcon className="md:h-8 md:w-8" />
            </button>
            <div className="heading-h2-semi-bold-tab md:heading-h2-semi-bold-desk text-foreground">
              +2519 1635 3625
            </div>
            <button
              className="md:p-[6px] cursor-pointer"
              onClick={() => handleCopy("+2519 1635 3625")}
            >
              <CopyIcon className="md:h-[32px] md:w-[32px]" />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center">
            <div className="">You may also find me on these platforms!</div>
            <div className="flex gap-4 justify-center">
              <Link href={data.socials.github} target="_blank">
                <GithubIcon />
              </Link>
              <Link href={data.socials.x} target="_blank">
                <XIcon />
              </Link>
              <Link href={data.socials.linkedin} target="_blank">
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
