import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  hero: {
    title: "Hi, I’m Mihreteab 👋",
    description:
      "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
    location: "Addis Ababa, Ethiopia",
    availability: "Available for new projects",
    socials: {
      github: "https://github.com/mihreteab",
      x: "https://x.com/mihreteab_d",
      linkedin: "https://www.linkedin.com/in/mihreteab-demeke-46a718140/",
    },
  },
  aboutMe: {
    heading: "Curious about me? Here you have it:",
    paragraphs: [
      "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
      "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",
      "When I'm not in full-on developer mode, you can find me hovering around on Twitter or Indie Hackers, witnessing the journey of early startups or enjoying some free time.",
      "One last thing, I'm available for freelance work, so feel free to reach out and say hello!",
    ],
    bulletsLeft: ["B.E. in Software Engineering", "Full time freelancer"],
    bulletsRight: ["Avid learner", "Aspiring indie hacker"],
  },
  experiences: [
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      title: "Sr. Frontend Developer",
      time: "Nov 2021 - Present",
      activities: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ],
  works: [
    {
      title: "Koalo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      picture: "/images/koalo.png",
      url: "https://koalo.koalo.app/en",
      techStacks: [
        "React",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "Koalo Studio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra.",
      picture: "/images/koalo-studio.png",
      url: "https://koalo-web-editor-dev.web.app/studio",
      techStacks: [
        "React",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ],
  testimonials: [
    {
      name: "John Doe",
      role: "Product Manager at Example Co",
      quote:
        "Working with Mihreteab was a pleasure. He consistently delivered high quality work and was a great collaborator.",
    },
    {
      name: "Jane Smith",
      role: "CTO at Startup Inc",
      quote:
        "A solid full stack engineer with a great eye for UX. I'd happily work with him again.",
    },
  ],
};

export async function getPortfolioData(): Promise<PortfolioData> {
  // In the future this could fetch from a DB or external API.
  return portfolioData;
}
