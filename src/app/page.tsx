import GithubIcon from "@/components/atoms/githubIcon";
import LightModeIcon from "@/components/atoms/lightModeIcon";
import LinkedInIcon from "@/components/atoms/linkedInIcon";
import LocationIcon from "@/components/atoms/locationIcon";
import XIcon from "@/components/atoms/xIcon";
import MobileMenu from "@/components/molecuels/mobileMenu";
import AboutMe from "@/components/organisms/aboutMe";
import Experience from "@/components/organisms/experience";
import Skills from "@/components/organisms/skills";
import Testimonials from "@/components/organisms/testimonials";
import Works from "@/components/organisms/works";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* header */}
      <div>
        <div className="md:px-[80px]">
          <div className="flex justify-between p-4 items-center md:px-[32px]">
            <div className="heading-bold-mob">{"<SS/>"}</div>
            <MobileMenu />
            <div className="hidden md:flex gap-[24px] items-center text-gray-600 body2-medium">
              <Link href="#">About</Link>
              <Link href="#">Work</Link>
              <Link href="#">Testimonial</Link>
              <Link href="#">Contact</Link>
              <div></div>
              <div className="flex gap-4">
                <button className="flex justify-center p-[6px] rounded-[8px] h-[36px] w-[36px]">
                  <LightModeIcon />
                </button>
                <button className="px-4 py-[6px] bg-gray-900 text-gray-50 rounded-[12px]">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-[64px] md:px-[80px] md:py-[96px]">
          <div className="flex flex-col-reverse md:flex-row md:px-[32px] gap-[48px]">
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col gap-2">
                <div className="heading-semi-bold md:heading-bold text-gray-900">
                  Hi, I’m Mihreteab 👋
                </div>
                <div className="body2-normal">
                  I&apos;m a full stack developer (React.js & Node.js) with a
                  focus on creating (and occasionally designing) exceptional
                  digital experiences that are fast, accessible, visually
                  appealing, and responsive. Even though I have been creating
                  web applications for over 7 years, I still love it as if it
                  was something new.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <LocationIcon />
                  <div className="body2-normal">Ahmedabad, India</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center h-6 w-6">
                    <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                  </div>
                  <div className="body2-normal">Available for new projects</div>
                </div>
              </div>
              <div className="flex">
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
            <div className="md:w-[400px] shrink-0 flex justify-center md:justify-end">
              <div className="relative flex justify-center md:block h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                <div className="absolute bottom-[10px] md:bottom-0 right-[10px] md:right-0 left-[10px] md:left-[40px] h-[260px] w-[260px] md:h-[320px] md:w-[280px] bg-gray-200 z-[-1]"></div>
                <Image
                  height={280}
                  width={240}
                  alt="profile"
                  src="/images/profile.png"
                  className="h-[280px] w-[240px] md:h-[320px] md:w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Experience />
      <Works />
      <Testimonials />
    </main>
  );
}
