export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

export type Work = {
  title: string;
  picture: string;
  description: string;
  techStacks: string[];
  url: string;
};

export type Experience = {
  title: string;
  time: string;
  activities: string[];
};
