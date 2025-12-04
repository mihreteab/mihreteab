import GithubIcon from "@/components/atoms/githubIcon";
import LinkedInIcon from "@/components/atoms/linkedInIcon";
import LocationIcon from "@/components/atoms/locationIcon";
import XIcon from "@/components/atoms/xIcon";
import DownloadButton from "@/components/molecuels/downloadButton";
import MobileMenu from "@/components/molecuels/mobileMenu";
import ThemeToggle from "@/components/molecuels/ThemeToggle";
import AboutMe from "@/components/organisms/aboutMe";
import Experience from "@/components/organisms/experience";
import Footer from "@/components/organisms/footer";
import GetInTouch from "@/components/organisms/getInTouch";
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
        <div className="fixed  left-0 right-0 z-10 md:px-[80px] backdrop-blur-2xl">
          <div className="flex justify-between p-4 items-center md:px-[32px]">
            <div className="heading-bold-mob text-foreground">{"<MD/>"}</div>
            <MobileMenu />
            <div className="hidden md:flex gap-[24px] items-center body2-medium text-secondary-foreground">
              <Link href="#about" className="text-secondary-foreground">
                About
              </Link>
              <Link href="#works">Work</Link>
              <Link href="#testimonials">Testimonial</Link>
              <Link href="#contact">Contact</Link>
              <div className="flex gap-4">
                <ThemeToggle />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-[132px] md:px-[80px] md:py-[164px]">
          <div className="flex flex-col-reverse md:flex-row md:px-[32px] gap-[48px]">
            <div className="flex flex-col gap-[48px]">
              <div className="flex flex-col gap-2">
                <div className="heading-semi-bold md:heading-bold text-foreground">
                  Hi, I’m Mihreteab 👋
                </div>
                <div className="body2-normal text-gray-600 dark:text-[#D1D5DB]">
                  I&apos;m a full stack developer (React.js & Node.js) with a
                  focus on creating (and occasionally designing) exceptional
                  digital experiences that are fast, accessible, visually
                  appealing, and responsive. Even though I have been creating
                  web applications for over 7 years, I still love it as if it
                  was something new.
                </div>
              </div>
              <div className="flex flex-col gap-2 text-gray-600 dark:text-[#D1D5DB]">
                <div className="flex gap-2">
                  <LocationIcon />
                  <div className="body2-normal">Addis Ababa, Ethiopia</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center h-6 w-6">
                    <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                  </div>
                  <div className="body2-normal">Available for new projects</div>
                </div>
              </div>
              <div className="flex text-gray-600 dark:text-[#D1D5DB]">
                <Link href="https://github.com/mihreteab">
                  <GithubIcon />
                </Link>
                <Link href="https://x.com/mihreteab_d">
                  <XIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/mihreteab-demeke-46a718140/">
                  <LinkedInIcon />
                </Link>
              </div>
            </div>
            <div className="md:w-[400px] shrink-0 flex justify-center md:justify-end">
              <div className="relative flex justify-center md:block h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                <div className="absolute bottom-[10px] md:bottom-0 right-[10px] md:right-0 left-[10px] md:left-[40px] h-[260px] w-[260px] md:h-[320px] md:w-[280px] bg-gray-200 dark:bg-[#374151] z-[-1] rounded-[12px]"></div>
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
      </div>
      <AboutMe />
      <Skills />
      <Experience />
      <Works />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </main>
  );
}
