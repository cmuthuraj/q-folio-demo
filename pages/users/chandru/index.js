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
  pageTitle: "Vinayaga Chandru",
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
    name: "Vinayaga Chandru",
    role: "Front-end developer",
    myAvatar: "chandru/me.png",
    description:
      "I am a Front-end developer at Qualogy B.V. specializing in ES6, React, Next JS & web-components",
  },
  about: {
    title: "About me",
    content:
      "Have 12+ years of experience in Web technologies which includes modern component driven JavaScript frameworks primarily on React. Good hands-on experience in identifying web-based user interactions along with designing & implementing highly responsive front-end applications. Proficient in translating designs & wireframes into high-quality code. I have work experience in multiple domains such as E-Commerce, Tele Communication, Auto mobile, Hospitality. Also I have worked for many international customers in US, NL, Australia, UK & Dubai",
  },
  skills: [
    {
      category: "Domain",
      items: "E-Commerce, Tele communication, Automobile, Hospitality",
    },
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
      category: "CMS",
      items: "SharePoint, Contentful",
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
      category: "Operating systems",
      items: "Windows, Linux",
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
      title: "Intermediary Portal",
      client: "ING, The Netherlands",
      period: "Apr 2022 - Present",
      role: "Front-end Developer | Senior Consultant",
      shortDescription: "My Business intermediary portal from ING group...",
      longDescription:
        "My Business intermediary portal from ING group which business user can use to easily submit and manage applications, get immediate insight into the feasibility, and personal sparring with an advisor.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of new features",
        "Develop existing applications and contribute to development of new applications",
        "Responsible for Front-end deployment & release",
        "Worked on Adobe analytics",
      ],
      technology: [
        "Lit-Html, Web-components, ES6",
        "Storybook, Rigor test, Retire JS",
        "Azure DevOps",
        "Git, npm",
      ],
    },
    {
      title: "Blu",
      client: "Fontem Ventures B.V., The Netherlands",
      period: "Sep 2020 - Dec 2021",
      role: "Front-end Developer | Technical Lead",
      shortDescription:
        "Fontem Ventures B.V. is a leader in Next Generation vaping technology and owns the global e-vapor brand blu...",
      longDescription:
        "Fontem Ventures B.V. is a leader in Next Generation vaping technology and owns the global e-vapor brand blu. It uses blu.com digital channel to sell their e-cigarettes across the world.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of highly-responsive user interface components via React concepts",
        "Development of Next JS application with React JS including Hooks concepts",
        "Worked on React Context API, state & props for app state management",
        "Development of application with Typescript, ES6 & Formik with Yup features",
        "Worked on Storybook, Styled Component and Contentful headless CMS",
        "Worked on Jest, Cypress, VWO and also on GTM (Google Tag Manager)",
      ],
      technology: [
        "React JS, Next JS, Typescript",
        "Styled component, Storybook",
        "A/B test using VWO",
        "Git, Yarn",
      ],
    },
    {
      title: "Informa",
      client: "Informa, UK",
      period: "Jun 2020 - Aug 2020",
      role: "Front-end Developer | Technical Lead",
      shortDescription:
        "Informa is a leading international intelligence, events and scholarly research group...",
      longDescription:
        "Informa is a leading international intelligence, events and scholarly research group. To develop a multi-source data ingestion tool to automatically source and ingest structured and unstructured data from various sources and to develop a UI/tool for Creating, Editing, Viewing and Curation of structured data and providing functionality for workflow management",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of application using React including Hooks & Redux",
        "Development of application with ES6 & Formik with Yup features",
        "Worked on Material UI CSS framework & AG Grid for rendering large data",
      ],
      technology: ["React JS, Redux", "SASS/SCSS, RWD", "Git"],
    },
    {
      title: "Oneapp",
      client: "Dubai Holding, Dubai",
      period: "Jun 2020 - Aug 2020",
      role: "Front-end Developer | Technical Lead",
      shortDescription:
        "Dubai holding is a global investment holding company...",
      longDescription:
        "Dubai holding is a global investment holding company. It’s idea is to have an app which is a go to digital place for all employees of the Dubai Holding group of companies for Work, Leisure and Lifestyle.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of application using React & Redux with Thunk middleware",
        "Worked on the development of Node based secure web services using Express JS",
        "Development of Mongo DB query includes CRUD operation",
        "Responsible for responsiveness of the App using custom CSS, SASS",
        "Worked on Azure App service, MSAL, MS Graph API & GA (Google Analytics)",
      ],
      technology: [
        "React JS, Redux, Node JS, Mongo DB",
        "SASS/SCSS, RWD",
        "Azure App Service, GA",
      ],
    },
    {
      title: "Data extraction",
      client: "Bright House, UK",
      period: "Jan 2019 - Mar 2019",
      role: "SharePoint Developer | Module Lead",
      shortDescription: "BrightHouse is the UK's largest rent-to-own lender...",
      longDescription:
        "BrightHouse is the UK's largest rent-to-own lender. One of it’s need to make content digitally and automate business process. Data sync between SharePoint site and external application using REST API.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Planning of SharePoint web sites and folder structure",
        "Development of PowerShell script & Microsoft flow for approval and routing document",
        "Worked on Azure function & SQL DB for maintaining customized audit log",
      ],
      technology: [
        "Office 365",
        "SharePoint Online, Microsoft Flow",
        "Azure AD and SQL DB",
      ],
    },
    {
      title: "Document migration",
      client: "Link Group, Australia",
      period: "Nov 2018 - Dec 2018",
      role: "SharePoint Developer | Module Lead",
      shortDescription:
        "Link Group administers financial ownership data and drives user engagement through technology...",
      longDescription:
        "Link Group administers financial ownership data and drives user engagement through technology. Automate document management process and keep data in sync with Azure database. Data sync between SharePoint site and Azure DB using Microsoft flow.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of Microsoft flow for managing document libraries.",
        "Configuration of BCS to connect Azure SQL DB with SharePoint online site.",
        "Development of SharePoint webpages using jQuery and Bootstrap framework.",
      ],
      technology: [
        "Office 365",
        "SharePoint Online, Microsoft Flow",
        "Azure AD and SQL DB",
      ],
    },
    {
      title: "Project Management Dashboard",
      client: "KPN B.V., The Netherlands",
      period: "Sep 2013 - Oct 2018",
      role: "SharePoint Developer | Senior Software Engineer",
      shortDescription:
        "KPN is a Dutch landline and mobile telecommunications company...",
      longDescription:
        "KPN is a Dutch landline and mobile telecommunications company. It wanted to automate business process and handling approvals in a SharePoint environment. To have a better PM tool for managing all project creation and management related activities. And to have a online reports based on SharePoint data for mutlitple functionalities which includes POD, PSP SLA tracker, RSM tool, etc.",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of SharePoint Designer workflows and InfoPath forms",
        "Configurations of SharePoint Webpart/List/Libraries",
        "Development of CRUD operations on SP List using SP services",
        "Development of online reports using jQuery, Angular/React JS, Materialize framework & Google Chart",
        "Daily/Weekly meetings with client & Onsite coordinator",
      ],
      technology: [
        "SharePoint Server, Designer workflow",
        "InfoPath Forms",
        "HTML, CSS & Materialize framework",
        "JavaScript, jQuery",
      ],
    },
    {
      title: "Owner's site",
      client: "Chrysler, US",
      period: "Aug 2010 - Sep 2013",
      role: "SharePoint Developer | Systems Engineer",
      shortDescription:
        "Chrysler is one of the big automobile manufacturers in the US...",
      longDescription:
        "Chrysler is one of the big automobile manufacturers in the US. There was a need to have a website to maintain owner’s manual, accessories catalogue, parts, recalls, payment and dealers and some additional operations. And also to have a carrers website, integration of external applications like Cognos, Advanced search, etc..",
      tileImage:
        "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&w=400&q=80",
      tasks: [
        "Development of custom SharePoint Master page, Site features & Web parts",
        "Worked on CAML Query & PowerShell Scripts",
        "Maintenance and CR (Change Request) implementation",
      ],
      technology: [
        "SharePoint Server, PowerShell",
        "HTML, CSS",
        "JavaScript, jQuery",
      ],
    },
  ],
};
