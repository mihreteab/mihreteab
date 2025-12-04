import Link from "next/link";
import MobileMenu from "../molecuels/mobileMenu";
import ThemeToggle from "../molecuels/ThemeToggle";
import DownloadButton from "../molecuels/downloadButton";

const NavBar = () => {
  return (
    <div className="2xl:container 2xl:m-auto fixed  left-0 right-0 z-10 md:px-[80px] backdrop-blur-2xl">
      <div className="flex justify-between p-4 items-center md:px-[32px]">
        <div className="heading-bold-mob text-foreground">{"<MD/>"}</div>
        <MobileMenu />
        <div className="hidden md:flex gap-[24px] items-center body2-medium text-secondary-foreground">
          <Link href="#about">About</Link>
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
  );
};

export default NavBar;
