# Qfolio (Qualogy virtual portfolio)

Digital portfolios for the promotion of Qualogy specialists.

## What do we want to achieve

A system for qualogy developers to create their own online portfolios to help present themselves as IT professionals towards clients.

## Tech Stack

- [Next.js](https://nextjs.org/docs/getting-started) (The [React](https://reactjs.org/docs/getting-started.html) Framework for Production)
- [MUI](https://mui.com/material-ui/getting-started/overview/) (Material UI)

## Prerequisite dev tools:

- Node js
- Code editor (VS code, etc…)
- Git

## Getting Started

It’s a Next.js static web application which uses MUI for ready to use components. MUI has a default support for all client side frameworks. As Next.js is a server side framework, some [additional configurations](https://mui.com/material-ui/guides/server-rendering/) are required before starting using MUI. This project has been configured with all such pre-configurations. So the developers can focus only on UI components.

In Next.js, a page is a React component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name. Example: If you create pages/about.js that exports a React component, it will be accessible at /about. [Read more...](https://nextjs.org/docs/basic-features/pages)

To work on this project, it's mainly need to focus on two folders,

- Portfolio pages per user - `pages/users/{username}`
- Reusable components - `src/components` > `Sections` or `Shared`

For the first time, please copy any of the existing user folder and rename it to your name and edit the contents [OR] create a new folder with your name under pages/users and feel free to add/edit your pages. Once it's ready, add a new link for your portfolio in `pages/index.js`

> Note: Please don't edit any files directly which are outside of your own folder in the pages folder. If it's required, please discuss with the FE team before making any such changes.

## How to test it locally

Run the command: `npm run dev`

Then open http://localhost:3000 on your browser to view the running application.

It opens the default page contains the list of portfolios onboarded. Once the specific user’s portfolio is clicked then it navigates to the portfolio of that user. From the user’s home page, it’s possible to scroll/navigate to further sections.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [MUI on Server](https://mui.com/material-ui/guides/server-rendering/) - learn about server side rendering set up
- [MUI + Next js](https://github.com/mui/material-ui/tree/HEAD/examples/nextjs) - initial setup for integrating MUI with Next JS
