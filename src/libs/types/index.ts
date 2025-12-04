export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

export type Work = {
  title: string;
  picture: string;
  description: string;
  techStacks: string[];
  url: string;
};

export type Experience = {
  title: string;
  time: string;
  activities: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type AboutMeData = {
  heading: string;
  paragraphs: string[];
  bulletsLeft: string[];
  bulletsRight: string[];
};

export type HeroType = {
  title: string;
  description: string;
  location: string;
  availability: string;
  socials: {
    github: string;
    x: string;
    linkedin: string;
  };
};

export type PortfolioData = {
  hero: HeroType;
  aboutMe: AboutMeData;
  experiences: Experience[];
  works: Work[];
  testimonials: Testimonial[];
};
