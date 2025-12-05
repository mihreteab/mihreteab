import { Skill } from "@/libs/types";
import Link from "next/link";
import React from "react";

export type SkillWrapperProps = {
  skill: Skill;
};

const SkillWrapper = ({ skill }: SkillWrapperProps) => {
  return (
    <Link
      href={skill.link}
      target="_blank"
      className="flex flex-col gap-2 items-center"
    >
      <div>{skill.icon}</div>
      <div>{skill.name}</div>
    </Link>
  );
};

export default SkillWrapper;
