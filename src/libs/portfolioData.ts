import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  hero: {
    title: "Hi, I’m Mihreteab 👋",
    description:
      "I'm software engineer focused on web development. I worked as a full stack developer and recently focused on Frontend. As a full stack developer I worked on MERN and MEAN stacks. I am passionate on problem solving. I build pixel perfect web apps (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
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
      "I'm Software Engineering graduate from Addis Ababa University in 2020, I joined workforce in local companies and shift to global market. I worked on a couple of global companies(US, Germany based) as fullstack and frontend engineer. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, scalable, highly performant code matters to me.",
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
      "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.",
      "When I'm not in full-on developer mode, you can find me hovering around on Linkedin or daily.dev, witnessing the journey of early startups or enjoying some free time.",
      "One last thing, I'm available for freelance work, so feel free to reach out and say hello!",
    ],
    bulletsLeft: [
      "BSc. in Software Engineering(AAU)",
      "5+ years of experience",
      "Full Stack Developer",
    ],
    bulletsRight: ["Fast learner", "Chess Player"],
  },
  experiences: [
    {
      title: "Sr. Frontend Engineer",
      time: "Jul 2024 - Present",
      companyLogo: "Whyzzer",
      link: "https://www.whyzzer.com/",
      activities: [
        "Ensure pixel-perfect accuracy in translating designs to the final product.",
        "Implement responsive design principles to ensure cross-platform compatibility.",
        "Optimize application performance and maintain clean, scalable code.",
        "Deploy and maintain applications on platforms such as Vercel, Firebase and Google App Engine.",
        "Collaborate with designers, product managers, and backend developers to deliver features efficiently.",
      ],
    },
    {
      title: "Full Stack Engineer",
      time: "Oct 2021 - May 2024",
      companyLogo: "Interlincx",
      link: "https://www.upwork.com/freelancers/~01d628ce78211b519d",
      activities: [
        "Leveraged JavaScript to create interactive components and animations,resulting in an improved user experience",
        "Pixel perfect implementation of design with Material UI, Bootstrap and CSS",
        "Developed a React-based web application with a responsive user interface, increasing user engagement",
        "Utilized libraries and frameworks such as Node,React and Next.js to create interactiveuser interfaces",
      ],
    },
    {
      title: "Full Stack Engineer",
      time: "Jan 2021 - May 2021",
      companyLogo: "Whizkids",
      link: "https://www.whizkidsworkshop.com",
      activities: [
        "Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Design and implement RESTful APIs to facilitate communication between the frontend and backend.",
        "Design and develop app using ruby on rails for backend and react for frontend",
        "Deploy and maintain applications on cloud platforms such as Heroku and Digital Ocean.",
      ],
    },
  ],
  works: [
    {
      title: "Koalo",
      description: "Koalo is a white labeld app",
      picture: "/images/koalo.png",
      url: "https://koalo.koalo.app/en",
      techStacks: [
        "Next",
        "Typescript",
        "White-labeling",
        "Tailwindcss",
        "Stream.io",
        "Git",
        "Firebase",
        "App Engine",
      ],
    },
    {
      title: "Koalo Studio",
      description:
        "Koalo Studio is a web app that helps users to create and manage their white-labeled Koalo apps.",
      picture: "/images/koalo-studio.png",
      url: "https://koalo-web-editor-dev.web.app/studio",
      techStacks: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Tailwindcss",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
    {
      title: "Stereopark",
      description: "Stereopark music streaming app like spotify",
      picture: "/images/stereopark.png",
      url: "https://stereopark-web.vercel.app/",
      techStacks: [
        "Next",
        "Typescript",
        "Tailwindcss",
        "Streaming APIs",
        "Branch.io",
        "Git",
        "Firebase",
        "stripe",
        "Vercel",
      ],
    },
  ],
  testimonials: [
    {
      name: "Diego",
      role: "Product Manager at Whyzzer",
      quote:
        "Working with Mihreteab was a pleasure. He consistently delivered high quality work and was a great collaborator.",
    },
    {
      name: "Jose Mondez",
      role: "CTO at Interlincx",
      quote:
        "A solid full stack engineer with a great eye for UX. I'd happily work with him again.",
    },
  ],
};

export async function getPortfolioData(): Promise<PortfolioData> {
  // In the future this could fetch from a DB or external API.
  return portfolioData;
}
