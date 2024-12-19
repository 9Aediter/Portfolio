import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "The Travel Store",
    description:
      "In the BNG project, I spearheaded the development and implementation of the Travel Store Solution, a comprehensive retail management system for BNG Corporation Limited. This innovative project encompassed a versatile web-admin backend and a user-friendly mobile application, designed to optimize sales transactions, product management, and customer service within travel stores.",
    tools: ["MySQL", "AWS EC2", "AWS S3", "NextJS"],
    role: "Business Analyst",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Laguna Laundry",
    description:
      "The Laguna Laundry Service Project, I led the development of an innovative Laundry Service Platform, specifically designed to enhance operational efficiency for Laguna Service LTD. This comprehensive platform comprised five key components: a mobile and web-based Front-end POS for seamless B2B and B2C transactions, a Logistics Application to streamline laundry pickup and delivery, a Factory Process Application to optimize in-factory operations, and a robust Back-end Management System for overarching administrative control. This project not only streamlined laundry service operations but also set a new standard for integrated service platforms in the hospitality industry.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "EXTJS",
      "MySQL",
      "AWS S3",
      "AWS ECS",
      "SCB Payment Gateways",
    ],
    role: "Product Owner, Business Analyst",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "POS Retails Shop",
    description:
      "The Atmos POS application project likely involved developing a Point of Sale (POS) software tailored for Atmos, a prominent retailer known for sneakers and streetwear. This application would be designed to streamline sales transactions, inventory management, and customer service within Atmos stores. Key features might include product scanning, payment processing, sales tracking, customer relationship management, and integration with online platforms. The goal would be to enhance the shopping experience, improve operational efficiency, and provide real-time data analytics for better business decisions.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "Google Maps",
      "NestJS",
      "TypeScript",
      "MySQL",
      "AWS S3",
      "Sun-Editor",
      "Gmail Passkey",
    ],
    role: "Product Owner, Business Analyst",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 4,
    name: "Middleware Toyota T1",
    description:
      "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 5,
    name: "Middleware Toyota VNA",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Help Me Project",
    description:
      "Training Chat-GPT with Project Data & Integrating with LINE API, I utilized project-specific data to train a Chat-GPT model, which was then integrated with LINE via an API. This setup provided automated support to users, alleviating the support team's workload and enhancing user satisfaction through timely responses.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
