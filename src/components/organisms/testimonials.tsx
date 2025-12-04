import Tag from "../atoms/tag";
import TestimonialCard from "../molecuels/testimonialCard";
import type { Testimonial as TestimonialType } from "@/libs/types";

type TestimonialsProps = {
  data: TestimonialType[];
};

const Testimonials = ({ data }: TestimonialsProps) => {
  return (
    <div
      id="testimonials"
      className="px-4 py-16 bg-secondary-background md:px-[80px] md:py-[96px]"
    >
      <div className="flex flex-col gap-6 md:px-8 md:gap-12">
        <div className="flex flex-col gap-4 items-center">
          <Tag>Testimonials</Tag>
          <div className="subtitle-normal md:subtitle-normal-desk">
            Nice things people have said about me:
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-[12px] md:flex-row md:gap-12">
          {data.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
