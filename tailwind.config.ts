
const flowbite = require("flowbite-react/tailwind");

import { ISkills } from "@/components/Skills/SkillsCard";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // ...
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
export const DATA_SKILLS: ISkills[] = [
  {
    title: 'Javascript',
    tag: 'Frontend',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    img: '/tech/reactjs.png',
    link: 'https://github.com/fiqhan/addclass/blob/662404d899fcc55c701185f86f1899b0b3e5cffb/public/next.svg',
  },
  {
    title: 'Javascript',
    tag: 'Frontend',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rerum architecto velit quo ex beatae cumque quibusdam totam dolores laudantium voluptatem, doloremque nobis sapiente labore aperiam nulla blanditiis quod dolore',
    img: '/tech/node.png',
    link: '/',
  },
  {
    title: 'Javascript',
    tag: 'Frontend',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rerum architecto velit quo ex beatae cumque quibusdam totam dolores laudantium voluptatem, doloremque nobis sapiente labore aperiam nulla blanditiis quod dolore',
    img: '/tech/next.png',
    link: '/',
  },
  {
    title: 'Javascript',
    tag: 'Frontend',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo rerum architecto velit quo ex beatae cumque quibusdam totam dolores laudantium voluptatem, doloremque nobis sapiente labore aperiam nulla blanditiis quod dolore',
    img: '/tech/tailwind.png',
    link: '/',
  },
];
