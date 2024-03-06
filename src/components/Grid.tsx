import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconSignature
} from "@tabler/icons-react";

export function BentoGridSecond() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ bgName }: { bgName: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-transparent dark:border-white/[0.2] ${bgName} bg-cover bg-no-repeat`}></div>
);

const items = [
  {
    title: "Vehicle Detection & Classification website (2023 - Present)",
    description: "A capstone project, I'm working as a Frontend developer.",
    header: <Skeleton bgName="bg-capstone bg-center"/>,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Warehouse of Heart website (2023 - Present)",
    description: "This project is initiated by Coach by ChAMP. This website will guide you through memories, aiming to make you love and appreciate yourself :)",
    header: <Skeleton bgName="bg-woh ng-top-center"/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AIS Digital Talent Internship (2023)",
    description: "I was a Full Stack Developer intern. This experience greatly helps me understand the role of the developer in the real-world industry.",
    header: <Skeleton bgName="bg-intern bg-center"/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Awareness in Technology Implementation (GATI) ",
    description:
      "I was a member of a collaborative course between Chula Engineering and Tokyo Institute of Technology. We got to learn design thinking under the theme of gamification and technology.",
    header: <Skeleton bgName="bg-gati bg-center"/>,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
