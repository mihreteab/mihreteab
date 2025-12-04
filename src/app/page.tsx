import { getPortfolioData } from "@/libs/portfolioData";
import AboutMe from "@/components/organisms/aboutMe";
import Experience from "@/components/organisms/experience";
import Footer from "@/components/organisms/footer";
import GetInTouch from "@/components/organisms/getInTouch";
import Hero from "@/components/organisms/hero";
import NavBar from "@/components/organisms/navBar";
import Skills from "@/components/organisms/skills";
import Testimonials from "@/components/organisms/testimonials";
import Works from "@/components/organisms/works";
import { PortfolioData } from "@/libs/types";

export default async function Home() {
  const data: PortfolioData = await getPortfolioData();

  return (
    <main className="2xl:container 2xl:m-auto">
      <NavBar />
      <Hero data={data.hero} />
      <AboutMe data={data.aboutMe} />
      <Skills />
      <Experience data={data.experiences} />
      <Works data={data.works} />
      <Testimonials data={data.testimonials} />
      <GetInTouch />
      <Footer />
    </main>
  );
}
