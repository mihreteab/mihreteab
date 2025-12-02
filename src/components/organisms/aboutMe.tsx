import Image from "next/image";
import Tag from "../atoms/tag";
// import PhotoFrame from "../molecuels/photoFrame";

const AboutMe = () => {
  return (
    <div className="bg-secondary-background py-[64px] px-4 md:px-[80px] md:py-[96px]">
      <div className="flex flex-col gap-6 md:px-8">
        <div className="flex justify-center">
          <Tag>About me</Tag>
        </div>
        <div className="flex flex-col md:flex-row gap-[48px]">
          <div className="flex justify-center flex-1">
            <div className="relative flex justify-center">
              <div className="absolute w-[320px] h-[360px] md:w-[400px] md:h-[480px] p-2 top-[20px] md:top-[40px] md:right-[40px]">
                <div className="bg-gray-200 h-full w-full"></div>
              </div>
              <Image
                width={280}
                height={360}
                src="/images/Pic.png"
                className="z-1 md:w-[400px] md:h-[480px]"
                alt="About picture"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1 text-secondary-foreground body2-normal">
            <div className="text-foreground heading-h3-semi-bold">
              Curious about me? Here you have it:
            </div>
            <div className="flex flex-col gap-4">
              <div>
                I&apos;m a passionate, self-proclaimed designer who specializes
                in full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>
              <div>
                I began my journey as a web developer in 2015, and since then,
                I&apos;ve continued to grow and evolve as a developer, taking on
                new challenges and learning the latest technologies along the
                way. Now, in my early thirties, 7 years after starting my web
                development journey, I&apos;m building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </div>
              <div>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </div>
              <div>
                When I&apos;m not in full-on developer mode, you can find me
                hovering around on twitter or on indie hacker, witnessing the
                journey of early startups or enjoying some free time. You can
                follow me on Twitter where I share tech-related bites and build
                in public, or you can follow me on GitHub.
              </div>
              <div>Finally, some quick bits about me.</div>
              <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                    <div>B.E. in Software Engineering</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                    <div>Full time freelancer</div>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                    <div>Avid learner</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-secondary-foreground"></div>
                    <div>Aspiring indie hacker</div>
                  </div>
                </div>
              </div>
              <div>
                One last thing, I&apos;m available for freelance work, so feel
                free to reach out and say hello! I promise I don&apos;t bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
