import { cn } from "@/libs/utils";
import Image from "next/image";

export type PhotoFrameProps = {
  src: string;
  width: number;
  height: number;
  styling?: string;
  alt: string;
  mobileWidth?: number;
  mobileHeight?: number;
};

const PhotoFrame = ({
  width,
  height,
  mobileWidth,
  mobileHeight,
  alt,
  src,
}: PhotoFrameProps) => {
  return (
    <div className="relative flex justify-center">
      <div
        className={cn(
          "absolute md:w-[400px] md:h-[480px] p-2 top-[20px] md:top-[40px] md:right-[40px]",
          mobileHeight
            ? `h-[${mobileHeight}] md:h-[${height}]`
            : `h-[${height}]`,
          mobileWidth ? `w-[${mobileWidth}] md:w-[${width}]` : `w-[${width}]`
        )}
      >
        <div className="bg-gray-200 h-full w-full"></div>
      </div>
      <Image
        width={width}
        height={height}
        src={src}
        className={cn(
          "z-1",
          mobileHeight && `$md:h-[${height}`,
          mobileWidth && `md:w-[${width}]`
        )}
        alt={alt}
      />
    </div>
  );
};

export default PhotoFrame;
