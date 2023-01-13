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
  pageTitle: "Abdorreza Mohagheghi (Vahid)",
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
    name: "Vahid Mohagheghi",
    role: "Front-end developer",
    myAvatar: "vahid/me.png",
    description:
      "I am a front-end developer at Qualogy B.V. who is dexterous at connecting any business domain to software and is deft at communication",
  },
  about: {
    title: "About me",
    content:
      "As a software engineer with a special focus on front-end web development I have over 6 years of experience in developing modern responsive high-performance web applications using TypeScript, Angular, and React for as many as 5 million concurrent users.\n" +
      "My passion for IT (BSc Computer Science) and having a solid understanding of business processes (MSc BA) enables me to comfortably bridge both worlds.\n" +
      "I have contributed to migrating several projects from legacy (AngularJS, jQuery, Bootstrap, VanillaJS, Webforms, MVC) codebases to more modern tech stacks (Angular 9+, REST).\n" +
      "Also, I have worked extensively with NPM and have done DevOps, e.g.,  GitHub actions, Gitlab, MS Azure pipelines, Docker, etc. \n" +
      "For almost the entire past 12 years I have also taught English as a second language, which demonstrates my ability to coach and lead people toward collaborative peer learning.\n",
  },
  skills: [
    {
      category: "Domain",
      items: "Stock trading, Telecom, E-commerce",
    },
    {
      category: "Programming/Markup languages",
      items: "TypeScript/JavaScript (ES6), HTML, CSS/SASS, PHP",
    },
    {
      category: "Libraries/Frameworks",
      items:
        "Angular (v.9-14), React (v.17), NgRx (State management), Bootstrap (v.3-5), jQuery (v.1-2)",
    },
    {
      category: "CI/CD",
      items: "Azure, Github Actions, Gitlab, Docker",
    },
    {
      category: "Development tools",
      items: "NPM, Git, TFS, Browser DevTools/Plugins, Intellij IDEA, WebStorm",
    },
    {
      category: "App/web servers",
      items: "Apache, Xampp, Nginx",
    },
    {
      category: "Cloud",
      items: "Azure",
    },
    {
      category: "Testing Automation",
      items: "Jest, Karma",
    },
    {
      category: "Others",
      items:
        "Adobe XD, Figma (UX), Swagger, Postman, UML, Styled component (CSS-In-JS), Jira, WordPress, Bash, RegEx, SPA, SSR, SEO, Photoshop, InkScape, MS Office",
    },
    {
      category: "Languages",
      items:
        "English (C1), French (A2), German (A1), Dutch (A1)",
    },
  ],
  projects: [
    {
      title: "ParQ - Dutch Municipalities’ Park Permits",
      client: "Qualogy Solutions",
      period: "Sep 2022 - Now",
      role: "Front-end Developer",
      shortDescription:
        "ParQ is an in-house SaaS project by Qualogy Solutions which enables municipalities and citizens to handle park permits anytime, anywhere",
      longDescription:
        "The team is realizing a generic solution for the distribution and administration of parking permits among the residents of Dutch municipalities. The backend of the platform is powered by Quarkus & the frontend is developed in React. The integrity of the BE codebase is secured by automated tests via Junit and Cucumber. We use Git (BitBucket) as VCS.\n" +
        "Developers have to write automated tests before getting approval for their code. The team works with a hybrid system of Scrum/Kanban to carry out Infrastructure/DevOps chores, provide support for current municipalities where the system is being used, develop further functionalities, resolve bugs, etc.\n" +
        "The application makes use of a lot of links with (municipal) systems, like ‘Bureau Registratie Persoonsgegevens’ (BRP), iDeal, PDOK, DigID/eHerkenning, NPR, and RDW. We use Azure CI/CD for deployment.\n",
      tileImage:
        "../vahid/parq-admin.png",
      tasks: [
        "Identifying possible performance/functionality improvements on the existing codebase",
        "Identifying frontend applications' development bottlenecks and mitigating/resolving issues that hinder CI/CD",
        "Developing reusable components, and automated unit and integration tests",
        "Troubleshooting and bug resolving for customers",
      ],
      technology: [
        "React, Jest, Typescript, CSS, Material UI",
        "Quarkus, Java, Cucumber, Jenkins, MYSQL, Maven, JUnit",
        "Git, Docker, Microsoft Azure",
        "Jira, Scrum, Kanban",
      ],
    },
    {
      title: "Online Stock Trading",
      client: "Asa Systems - An Agah Brokerage Company",
      period: "August 2021 - August 2022",
      role: "Full-stack Developer",
      shortDescription:
        "ParQ is an in-house SaaS project by Qualogy Solutions which enables municipalities and citizens to handle park permits anytime, anywhere",
      longDescription:
        "Asa Systems is a subsidiary of Agah Brokerage, the 2nd largest brokerage in Iran in terms of the number of clients.\n" +
        "Asa runs and develops the entire software solutions that Agah relies on. As a full-stack developer, I was in a team of 3 frontend developers, responsible for the development of a new online trading SPA in Angular which was formerly written in AngularJS.\n" +
        "And also helped the Backend team develop REST API endpoints in C# .net Core.\n" +
        "To create an intuitive UI for trading, we adopted a range of renowned chart, table, and visualization libraries/technologies, e.g.: AG-Grid, ChartJs, AnyChart, TradingView, etc.\n" +
        "Other packages that were used in development include some PrimeNg and NgBootstrap components, Cashew (for caching data), MS SignalR (for constant subscription to server-side updates), MomentJs (with an extension to add support for the Persian calendar).\n" +
        "In ASA, we ran weekly sprints to add new functionalities to the new SPA and resolve bugs in the existing system.\n" +
        "Our CI/CD pipelines were implemented in the Azure environment. One of my major contributions to the project was a very versatile Angular number input component which is available on my GitHub and makes use of GitHub actions, automated changelogs, etc. for publishing a node package.",
      tileImage:
        "../vahid/tse-online.png",
      tasks: [
        "Developing reusable components for the new trading SPA",
        "Improving and migrating the existing UI/UX from Angular JS to Angular 12 (later upgraded to 13)",
        "Identifying frontend applications' performance bottlenecks and mitigating/resolving relevant issues",
        "Assisting the development of C#.net REST API endpoints",
      ],
      technology: [
        "TypeScript (Angular), Jest, JavaScript, SASS",
        "C# .net Core, HTML, REST API, SignalR",
        "AG-Grid, ChartJS, AnyChart, TradingView, MomentJS, Cashew",
        "BitBucket, Git, Azure, GitHub, Node",
        "Jira, Scrum, Kanban",
      ],
    },
    {
      title: "360 Sales System",
      client: "RighTel Telecommunications",
      period: "February 2019 - July 2021",
      role: "Front-end Developer",
      shortDescription:
        "Comprehensive Sales System was an in-house project in RighTel which aimed at centralizing the entire sales venues of the company (retail, wholesale, online, etc.)",
      longDescription:
        "RighTel is the 3rd largest Mobile Telecommunications Company in Iran with over 5 million active subscribers. The online sales platform of the company solely accounts for over a third of the company’s revenues.\n" +
        "When I started working at RighTel, the company’s sales portal ran on legacy C# .net 3 MVC and used jQuery 1.x and Bootstrap 3 for UI. The website was powered by Liferay and used Vanilla JS and CSS for UI.\n" +
        "As a Front-end developer, I was responsible for improving, upgrading, and troubleshooting the UI of the existing website/online sales platform. As my first project, we migrated the entire online sales platform to Bootstrap 4.1 with support for RTL languages and jQuery 2.4.\n" +
        "Later on, we as a team that comprised of business analysts, UX designers, backend and frontend developers were assigned the giant project of designing and implementing an all-new Comprehensive Sales Platform that runs on Java Springboot REST API microservices and Angular SPAs for the administration panel and online sales (for retailers and end users).\n" +
        "As a frontend developer, I used a wide range of  technologies, e.g. UML, AdobeXD, Figma, swagger, Postman, etc. to collaborate with the Analysts, UX designers, and backend developers.\n" +
        "The new sales platform project was not allocated a DevOps team, so I also worked with Docker and Gitlab CI/CD pipelines to facilitate delivering the artifacts for our biweekly Scrum sprints.",
      tileImage:
        "../vahid/rightel.png",
      tasks: [
        "Improving, upgrading, and troubleshooting the existing UI of the sales platform",
        "Developing a new Sales platform based on UX Prototypes and UML Diagrams to work with REST APIs",
      ],
      technology: [
        "TypeScript (Angular), SASS, Bootstrap, jQuery, JavaScript, CSS, Liferay, Velocity, Apache",
        "Java, Springboot",
        "Git, Gitlab, TFS",
        "Jira, Scrum, Kanban",
      ],
    },
  ],
};
