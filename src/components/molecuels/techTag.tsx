export type TechTagProps = {
  stack: string;
};
const TechTag = ({ stack }: TechTagProps) => {
  return (
    <div className="bg-gray-200 dark:bg-[#374151] rounded-[12px] py-1 px-5 text-secondary-foreground body3-medium">
      {stack}
    </div>
  );
};

export default TechTag;
