import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import sudokuImg from "@/public/project-sudoku.png";
import illustrationImg from "@/public/illustration.png";

type ProjectData = {
  title: string;
  description: string;
  imageProps?: ComponentPropsWithoutRef<typeof Image>;
  blogPostUrl?: string;
  mainUrl?: string;
  demoUrl?: string;
  dribbbleUrl?: string;
  figmaUrl?: string;
  githubUrl?: string;
};

export const projectsData: ProjectData[] = [
  {
    title: "SudokuJS",
    description:
      "An event-based Sudoku web app written using HTML, SASS/SCSS, and JavaScript. Features random generation, keyboard controls, pencilmarks, and a difficulty slider.",
    imageProps: {
      src: sudokuImg,
      alt: "Preview image of the SudokuJS web application.",
      style: { backgroundColor: "white" },
    },
    // blogPostUrl: "something",
    mainUrl: "https://jt-ziolo.github.io/sudoku-js-web-app",
    demoUrl: "https://jt-ziolo.github.io/sudoku-js-web-app",
    githubUrl: "https://github.com/jt-ziolo/sudoku-js-web-app",
  },
  // {
  //   title: "Git Id Tool",
  //   description:
  //     "A Python CLI (command-line tool) which helps developers preview and guard against accidental use of improperly-assigned SSH and GPG identities when using git.",
  //   imageProps: {
  //     src: illustrationImg,
  //     alt: "Preview image of the Git Id Tool command line interface.",
  //     style: { backgroundColor: "white" },
  //   },
  //   // blogPostUrl: "something",
  //   mainUrl: "https://jt-ziolo.github.io/sudoku-js-web-app",
  //   demoUrl: "https://jt-ziolo.github.io/sudoku-js-web-app",
  //   githubUrl: "https://github.com/jt-ziolo/sudoku-js-web-app",
  //   blogPostUrl: "...",
  //   dribbbleUrl: "...",
  //   // figmaUrl: "...",
  // },
];
