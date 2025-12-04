import { Testimonial } from "@/libs/types";
import AvatarIcon from "../atoms/avatarIcon";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="p-8 bg-[#ffffff] dark:bg-[#1F2937] rounded-[12px] flex flex-col gap-6 drop-shadow-md items-center md:p-12 text-secondary-foreground">
      <AvatarIcon />
      <div className="body2-normal">{testimonial.quote}</div>
      <div className="flex flex-col gap-1 items-center">
        <div className="subtitle-semi-bold-tab md:subtitle-semi-bold-desk text-foreground">
          {testimonial.name}
        </div>
        <div className="body3-normal">{testimonial.role}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
