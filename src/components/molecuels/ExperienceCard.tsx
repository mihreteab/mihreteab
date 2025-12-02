import UpworkIcon from "../atoms/upworkIcon";

const ExperienceCard = () => {
  return (
    <div className="p-8 rounded-[12px] bg-background dark:bg-[#1F2937] drop-shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:gap-[48px]">
        <div>
          <UpworkIcon />
        </div>
        <div className="md:order-last text-gray-700 dark:text-[#E5E7EB]">
          Nov 2021 - Present
        </div>
        <div className="md:flex-1">
          <div className="subtitle-semi-bold-tab md:subtitle-semi-bold-desk text-foreground">
            Sr. Frontend Developer
          </div>
          <div className="flex flex-col gap-1 text-secondary-foreground body2-normal">
            <div className="flex gap-4">
              <div className="w-2 shrink-0 flex justify-center items-center h-[25px]">
                <div className="bg-secondary-foreground h-2 w-2 rounded-full"></div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 shrink-0 flex justify-center items-center h-[25px]">
                <div className="bg-secondary-foreground h-2 w-2 rounded-full"></div>
              </div>
              <div>
                Ut pretium arcu et massa semper, id fringilla leo semper.
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 shrink-0 flex justify-center items-center h-[25px]">
                <div className="bg-secondary-foreground h-2 w-2 rounded-full"></div>
              </div>
              <div>Sed quis justo ac magna.</div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 shrink-0 flex justify-center items-center h-[25px]">
                <div className="bg-secondary-foreground h-2 w-2 rounded-full"></div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
