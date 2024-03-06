import { HoverEffect } from "./ui/card-hover";

export function CardHoverEffect() {
  return (
    <div className="mt-8 max-w-5xl mx-auto px-8">
      <p className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Skills & Personal Interests</p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Programming Languages",
    description:
      "HTML, CSS, JavaScript, TypeScript, Python, C++, MySQL, NoSQL(MongoDB)",
  },
  {
    title: "Framework / Library",
    description:
      "React, Next.js, Angular, Tailwind, Framer Motion (& Now, I'm in love with Aceternity UI 💖)",
  },
  {
    title: "Interests",
    description:
      "Japanese, Culture of Scandinavia, Self-Enrichment, Traveling, Human-Computer Interaction (HCI)",
  },
];
