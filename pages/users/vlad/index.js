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
  Languages,
} from "../../../src/components/Sections";
import Divider from "@mui/material/Divider";

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
          <Languages languages={constants.languages[0]} />
          <Divider orientation="vertical" variant="middle" flexItem />

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
  pageTitle: "Vlad Afanasev",
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
    name: "Vlad Afanasev",
    role: "Front-end developer",
    myAvatar: "vlad/me.png",
    description: "I'm a front-end developer at Qualogy.",
  },
  about: {
    title: "About me",
    content:
      "I’m a tech-savvy front-end developer with well-developed soft skills. Tries to come up with creative solutions for complex problems, always looks for ways to implement improvements and values ​​quality. Good communicator, get-things-done mentality and pleasant to deal with.\n\
      With more than 5 years of experience in web technologies which includes modern component driven JavaScript frameworks primarily on React. I am passionate about responsive web design and a firm believer of mobile-first approach. Always making sure the User Experience is outstanding before I start to translate the designs into reusable and accessible web components.",
  },
  skills: [
    {
      category: "Project",
      items: "Scrum/Agile, Jira",
    },
    {
      category: "Programming languages",
      items: "HTML, CSS/SASS, JavaScript (ES6), jQuery",
    },
    {
      category: "Libraries/Frameworks",
      items: "React, Next JS, Redux (State management)",
    },
    {
      category: "Development tools",
      items: "NPM, Yarn, Git",
    },
    {
      category: "Analytics",
      items: "Piwik PRO",
    },
    {
      category: "Others",
      items: "Figma (UX/UI), Styled component (CSS-In-JS), SEO",
    },
  ],
  languages: [
    {
      Nederlands: 100,
      English: 70,
    },
  ],
  projects: [
    {
      title: "YPA",
      client: "YPA",
      period: "February 2022 - November 2022",
      role: "Front-end Developer",
      shortDescription: "Develop headless e-commerce platforms in NextJS",
      longDescription:
        "YPA is a digital agency that realizes headless e-commerce platforms for customers. As a Front-end Developer I developed the platforms with React (Next.js) and made the connection with the REST API endpoints. The Google Ranking was central to the development of the platforms. Therefore, it was essential that the performance of each website achieved a high score. To achieve this, I took into account the structure of each page during development to achieve a high SEO score by using Structured Data. I also made sure that my web components are accessible by applying the Web Content Accessibility Guidelines. During the projects I worked closely with UX/UI designers, to be able to adjust certain designs if I saw an improvement in the accessibility of the product. The designs were converted into reusable web components, which were styled using SCSS (Sass) with the BEM notation. In addition to the duties of a developer, I also performed project management duties, which made me responsible for providing each developer with work and planning ahead with the client so that we as developers were provided with the necessary resources on time.",
      tileImage:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQETn9ptbgiT4A/company-logo_200_200/0/1631606776058?e=1678924800&v=beta&t=lJjObLjHwISnWtjzpdpNJB12gxaS_YtwISrR_YhlU4A",
      tasks: [
        "Develop reusable NextJS components",
        "Configure CI/CD pipelines",
        "Project management",
        "Customer service",
        "Guide new colleagues ",
      ],
      technology: [
        "React JS, Next JS",
        "HTML, CSS, SASS, Javascript",
        "Figma",
        "Git, Yarn",
      ],
    },
    {
      title: "Belastingdienst",
      client: "Belastingdienst",
      period: "September 2018 - February 2022",
      role: "Front-end Developer",
      shortDescription:
        "Refactoring and further development of the website www.belastingdienst.nl",
      longDescription:
        "As a Front-end Developer at the Tax Authorities, I contributed to the renewal and further development of the website (www.belastingdienst.nl). Within the multidisciplinary Scrum team Webtools I was responsible for the calculation tools. For that I converted the Functional Designs provided by the information analysts into code in VanillaJS. One of my tasks as a Front-end Developer was to link new products to the website and to integrate these products with the CMS.The web components I developed were provided by UX/UI designers from another team. I developed the web components as generically as possible and applied Sass to style them. The Tax and Customs Administration used the Atlassian package. That means I processed stories in Jira, managed the repository in Bitbucket, and documented my work in Confluence.",
      tileImage:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQFJc9BxMyqEzw/company-logo_100_100/0/1646054516276?e=1678924800&v=beta&t=96yTEFHwjSnUBUfRcalpTqmsHKv7AEKSFsUUTKQe_i0",
      tasks: [
        "Develop reusable vanillaJS components",
        "Project management",
        "Guide new colleagues ",
      ],
      technology: [
        "React JS, Next JS",
        "Bootstrap",
        "HTML, CSS, SASS, Javascript",
        "Git, NPM",
      ],
    },
    {
      title: "53 Graden Noord",
      client: "53 Graden Noord",
      period: "October 2017 - August 2018",
      role: "Front-end Developer",
      shortDescription:
        "Translating designs into pixel perfect websites for hotels and B&B's",
      longDescription:
        "53 Graden Noord is an advertising agency that specializes in websites with booking systems for B&Bs and hotels, among others. As a web developer I translated the designs into complete websites. I was also responsible for configuring the CMS and supervising new colleagues and interns. The projects were developed with HTML, CSS (Sass), Javascript and JQuery. In the HTML I placed handlebars to provide the blocks with content from the CMS Concrete5.",
      tileImage:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHLxxpPA0mF9w/company-logo_100_100/0/1543403192824?e=1678924800&v=beta&t=-rGG7W1GtbvvOmGrbhz3nAgKwu0E70EVBek3nDHosnA",
      tasks: [
        "Translating designs into pixel perfect websites",
        "Configure CMS",
        "Guide new colleagues ",
      ],
      technology: [
        "React JS, Next JS",
        "HTML, CSS, SASS, Javascript",
        "Git, NPM",
      ],
    },
    {
      title: "Combird",
      client: "Combird",
      period: "February 2017 - September 2017",
      role: "Front-end Developer",
      shortDescription:
        "Developing an customer satisfaction survey application within AngularJS",
      longDescription:
        "Combird is a telecom company that focuses on SMEs. As a developer at Combird I was responsible for developing an application to send out customer satisfaction surveys and display the results in a dashboard. The dashboard was developed in the Javascript framework Angular (Javascript), HTML, CSS (Sass).",
      tileImage:
        "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tasks: [
        "Development of a CMS for customer satisfaction surveys",
        "Write test plans and perform tests of an intercom system",
      ],
      technology: [
        "AngularJS",
        "HTML, CSS, SASS, Javascript, JQuery",
        "Bootstrap",
        "Git, NPM",
      ],
    },
  ],
};
