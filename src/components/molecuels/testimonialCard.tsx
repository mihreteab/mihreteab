import AvatarIcon from "../atoms/avatarIcon";

const TestimonialCard = () => {
  return (
    <div className="p-8 bg-[#ffffff] rounded-[12px] flex flex-col gap-6 drop-shadow-md items-center md:p-12">
      <AvatarIcon />
      <div className="body2-normal">
        “Job well done! I am really impressed. He is very very good at what he
        does:) I would recommend Sagar and will rehire in the future for
        Frontend development.”
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="subtitle-semi-bold-tab md:subtitle-semi-bold-desk">
          John Doe
        </div>
        <div className="body3-normal">Founder - xyz.com</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
