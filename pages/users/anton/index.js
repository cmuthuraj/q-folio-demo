import React, { useState } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import { Layout } from "../../../src/components/Shared";
import {
  Intro,
  About,
  Skills,
  Projects,
  Contact,
} from "../../../src/components/Sections";

export default function Index() {
  const [inViewSection, setinViewSection] = useState(false);

  return (
    <>
      <Head>
        <title>{constants.pageTitle}</title>
      </Head>
      <Layout
        navItems={constants.nav.menuItems}
        inViewSection={`#${inViewSection}`}
      >
        <Box>
          <Intro
            myAvatar={constants.intro.myAvatar}
            name={constants.intro.name}
            role={constants.intro.role}
            description={constants.intro.description}
            setinViewSection={setinViewSection}
          />
          <About
            title={constants.about.title}
            content={constants.about.content}
            imagePath={constants.intro.myAvatar}
            setinViewSection={setinViewSection}
          />
          <Skills
            content={constants.skills}
            setinViewSection={setinViewSection}
          />
          <Projects
            content={constants.projects}
            setinViewSection={setinViewSection}
          />
          <Contact setinViewSection={setinViewSection} />
        </Box>
      </Layout>
    </>
  );
}

export const constants = {
  pageTitle: "Anton de Bode",
  nav: {
    menuItems: [
      { name: "Home", route: "#intro" },
      { name: "About", route: "#about" },
      { name: "Skills", route: "#skills" },
      { name: "Projects", route: "#projects" },
      { name: "Contact", route: "#contact" },
    ],
  },
  intro: {
    name: "Anton de Bode",
    role: "Front-end developer",
    myAvatar: "anton/me.png",
    description:
      "I am a full-stack developer at Qualogy B.V. specializing in Front-end development",
  },
  about: {
    title: "About me",
    content:
      "Have 10+ years of experience in Web technologies which includes modern component driven JavaScript frameworks primarily on React. Good hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive front-end applications. Proficient in translating designs & wireframes into high-quality code. I have work experience in multiple domains such as E-Commerce, Tele Communication, Auto mobile, Hospitality.",
  },
  skills: [
    {
      category: "Project",
      items: "Scrum/Agile, Jira",
    },
    {
      category: "Programming languages",
      items: "HTML, CSS/SASS, JavaScript (ES6), Typescript, jQuery",
    },
    {
      category: "Libraries/Frameworks",
      items:
        "React, Next JS, Angular, Vue, Web components, Lit-html, Redux (State management)",
    },
    {
      category: "Development tools",
      items: "NPM, Yarn, Webpack, Git, DevOps (Azure), Docker, Kubernetes(k8s)",
    },
    {
      category: "App/web servers",
      items: "Node.js (Express JS)",
    },
    {
      category: "Cloud",
      items: "Azure",
    },
    {
      category: "Testing Automation",
      items: "Jest, Enzyme, Cypress",
    },
    {
      category: "Analytics",
      items: "Google Analytics, Adobe analytics, A/B testing (VWO)",
    },
    {
      category: "Others",
      items:
        "Figma (UX), Styled component (CSS-In-JS), Storybook (Component library), SPA, SSR, SEO",
    },
  ],
  projects: [
    {
      title: "Project name",
      client: "Client name",
      period: "{month} {year} - {month} {year}",
      role: "Front-end Developer | Technical Lead",
      shortDescription: "Short description",
      longDescription: "Long description",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"],
      technology: [
        "React JS, Next JS, Typescript",
        "Styled component, Storybook",
        "A/B test using VWO",
        "Git, Yarn",
      ],
    },
  ],
};
