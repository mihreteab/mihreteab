import CopyIcon from "../atoms/copyIcon";
import GithubIcon from "../atoms/githubIcon";
import LinkedInIcon from "../atoms/linkedInIcon";
import MailIcon from "../atoms/mailIcon";
import PhoneIcon from "../atoms/phoneIcon";
import Tag from "../atoms/tag";
import XIcon from "../atoms/xIcon";

const GetInTouch = () => {
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
            <button className="md:p-1.5">
              <MailIcon className="md:h-8 md:w-8" />
            </button>
            <div className="heading-h2-semi-bold-tab md:heading-h2-semi-bold-desk text-foreground">
              mihreteabdemeke@gmail.com
            </div>
            <button className="md:p-1.5">
              <CopyIcon className="md:h-8 md:w-8" />
            </button>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <button className="md:p-1.5">
              <PhoneIcon className="md:h-8 md:w-8" />
            </button>
            <div className="heading-h2-semi-bold-tab md:heading-h2-semi-bold-desk text-foreground">
              +2519 1635 3625
            </div>
            <button className="md:p-[6px]">
              <CopyIcon className="md:h-[32px] md:w-[32px]" />
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center">
            <div className="">You may also find me on these platforms!</div>
            <div className="flex gap-4 justify-center">
              <button>
                <GithubIcon />
              </button>
              <button>
                <XIcon />
              </button>
              <button>
                <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
