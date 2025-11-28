export type TechTagProps = {
  stack: string;
};
const TechTag = ({ stack }: TechTagProps) => {
  return (
    <div className="bg-gray-200 rounded-[12px] py-1 px-5 text-gray-600 body3-medium">
      {stack}
    </div>
  );
};

export default TechTag;
