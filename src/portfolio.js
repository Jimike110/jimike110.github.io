import {
  avitoCloneImages,
  bankifyIimages,
  gpt3Images,
  gymLikeImages,
  hackerNewsCloneImages,
  smartQuizAppImages,
} from "./utils/importAll";

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello",
  greetingEmoji: "👋.",
  title2: "Michael",
  logo_image_wide: "logo_wide.png",
  logo_name: "<Jimike/>",
  nickname: "Jimike",
  full_name: "Michael Oladoye",
  subTitle: "Web Developer, AI Enthusiast 🔥. Always learning.",
  resumeLinkEng:
    "https://docs.google.com/document/d/1B1bQrWD9sL14xdvcRl9wk6GdJXhu4JVFzwnMoegnohU/edit?usp=sharing",
  mail: "mailto:m.oladoye@yandex.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/jimike110",
  linkedin: "https://www.linkedin.com/in/jimike/",
  gmail: "m.oladoye@yandex.com",
  // gitlab: "https://gitlab.com/jimike110",
  facebook: "https://www.facebook.com/michael.oladoye.129/",
  twitter: "https://x.com/jimikeCodes",
  telegram: "https://t.me/jimikeCodes",
  vk: "https://vk.com/jimikeCodes",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Full-Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Modern React Applications – Expert in building interactive, high-performance UIs with React.js and Next.js, leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal SEO and load times.",
        "⚡ TypeScript & JavaScript – Strong TypeScript discipline on large codebases, plus ES6+ JavaScript to write maintainable, bug-resistant code.",
        "⚡ API Design & Integration – Design and consume RESTful APIs; handle data fetching, caching, and client-side state management (Redux, Zustand, React Query) for seamless user flows.",
        "⚡ Responsive CSS & Design Systems – Craft pixel-perfect layouts using modern CSS and libraries (Flexbox, Grid, CSS-in-JS, Tailwind) and design systems (Material UI, Ant Design) to build reusable component libraries.",
        "⚡ State Management & Performance – Optimize load speed and runtime performance with lazy loading, code-splitting, memoization, and efficient state architecture.",
        "⚡ Tooling & Collaboration – Comfortable with Git workflows, CI/CD pipelines, linting/formatting (ESLint, Prettier), unit and integration testing (Jest, React Testing Library), and close collaboration via agile methodologies.",
      ],
      softwareSkills: [
        {
          skillName: "React.jS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "akar-icons:nextjs-fill",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007acc",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "devicon-plain:java-wordmark",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "WordPress Development & Maintenance",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ 4+ Years of Experience – Delivered and maintained bespoke WordPress sites for startups, local businesses, and non-profits, translating client briefs into polished, user-friendly websites.",
        "⚡ Performance & Security – Implemented caching (WP Rocket, Redis), image optimization, and security hardening (firewall rules, secure user roles) to keep sites lightning-fast and protected.",
        "⚡ SEO & Analytics – Integrated best practices (semantic HTML, metadata, sitemaps) and set up Google Analytics/Tag Manager to drive user growth and measure success.",
        "⚡ Ongoing Support & Growth – Provide hosting, updates, backups, and feature enhancements on retainer, helping clients scale their online presence worry-free.",
      ],
      softwareSkills: [
        {
          skillName: "WordPress",
          fontAwesomeClassname: "ic:baseline-wordpress",
          style: {
            color: "#00749c",
          },
        },
        {
          skillName: "Elementor",
          fontAwesomeClassname: "simple-icons:elementor",
          style: {
            color: "#FF7BE5",
          },
        },
        {
          skillName: "WooCommerce",
          fontAwesomeClassname: "devicon-plain:woocommerce-wordmark",
          style: {
            color: "#96588a",
          },
        },
        {
          skillName: "WPForms",
          fontAwesomeClassname: "fa6-brands:wpforms",
          style: {
            color: "#E27730",
          },
        },
        {
          skillName: "Yoast SEO",
          fontAwesomeClassname: "fa6-brands:yoast",
          style: {
            color: "#A61E69",
          },
        },
        {
          skillName: "Jetpack",
          fontAwesomeClassname: "arcticons:jetpack",
          style: {
            color: "#669c34",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "GitHub Actions",
        //   fontAwesomeClassname: "simple-icons:githubactions",
        //   style: {
        //     color: "#5b77ef",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ITMO University",
      subtitle: "Bachelor's in Computer Science & Engineering",
      logo_path: "itmo.png",
      alt_name: "ITMO",
      duration: "2024 - 2028",
      descriptions: [
        "⚡ Foundations Covered – Completed courses in Discrete Mathematics, Linear Algebra, and Introduction to Programming (Python & Java), gaining solid problem-solving and coding fundamentals.",
        "⚡ Campus Engagement – Attended faculty orientation, join study groups with senior mentors, and earned a Yandex certificate for contributing to ITMO’s Battle of Universities success.",
        "⚡ I actively participate in scientific conferences and hackathons.",
      ],
      website_link: "https://www.itmo.ru/",
    },
    // {
    //   title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
    //   subtitle: "Diploma in Information Technology",
    //   logo_path: "ssgandhy.png",
    //   alt_name: "SSGC",
    //   duration: "2018 - 2021",
    //   descriptions: [
    //     "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
    //     "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
    //     "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
    //     "⚡ I have secured 9.82 CGPA.",
    //   ],
    //   website_link: "http://www.ssgc.cteguj.in/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Semi-finalist of the national programming tournament among students",
      subtitle: "Баттл Вузов (Яндекс), 2024",
      logo_path: "battle_of_unis.png",
      certificate_link:
        "https://certify.s3.yandex.net/young-yandex/74b6021d-3100-422c-b4d4-0a0d8d1833ea/4df33b64-d63d-402a-92cb-dd5955e80ff3.pdf",
      alt_name: "Баттл Вузов (Яндекс)",
      color_code: "#7A32EF",
    },
    {
      title: "Top 3 finisher in the it-hackathon",
      subtitle: "Сбер X Просто X ITMO, 2025",
      logo_path: "it_hackathon.png",
      certificate_link: "https://disk.yandex.ru/i/wE10Gv0LYPanjg",
      alt_name: "it_hackathon-25",
      color_code: "#276838",
    },
    {
      title: "Participant in the XIV Congress of Young Scientists",
      subtitle: "ITMO, 2025",
      logo_path: "КМУ_2025.png",
      certificate_link: "https://disk.yandex.com/i/18mgstWwBD8qww",
      alt_name: "ITMO University",
      // color_code: "#F6B808",
      color_code: "#bebee3",
    },
    {
      title:
        'Participant of the online training "Frontend-Development & React.js"',
      subtitle: "Т1 Холдинг",
      logo_path: "Т1_дебют.png",
      certificate_link:
        "https://davtb-teachbase.api.eric.s3storage.ru/system/coursestat/49661/cert/19d91e334cea39555bbbd7535c94fbca.pdf",
      alt_name: "Т1 Холдинг",
      color_code: "#2eb3ff",
    },
    {
      title: "Responsive Web Design Developer Certification",
      subtitle: "freeCodeCamp, 2023",
      logo_path: "freeCodeCamp.jpg",
      certificate_link:
        "https://www.freecodecamp.org/certification/jimike/responsive-web-design",
      alt_name: "freeCodeCamp",
      color_code: "#0a0b22",
    },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Throughout my six-plus years as a developer, I've focused on delivering solutions for real businesses and projects, from middle-scale operations to emerging startups and personal initiatives. I also find fulfillment in volunteering outside of my professional endeavors.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Front-end developer trainee",
          company: "SkailleUp",
          company_url: "https://www.linkedin.com/company/skailleuphq/",
          logo_path: "skailleuphq_logo.jpg",
          duration: "Aug 2023 - March 2024",
          location: "Remote, New York",
          description: `Rebuilt the entire company stack using ReactJS, HTML, CSS, JavaScript, GitHub, and RESTful APIs.
Checked code structure, conformance, and browser compatibility with validation processes.
Participated in design discussions and code reviews.
Worked with various teams to build and maintain digital experiences for several company products.`,
          color: "#0071C5",
        },
        {
          title: "IT Assistant",
          company: "D’Lens Digital Technologies",
          company_url: "http://nightowls.company/",
          logo_path: "dlens.jpg",
          duration: "May 2022 - July 2023",
          location: "Ibadan",
          description: `Recommended and implemented hardware upgrades and custom software solutions resulted in a 30% increase in overall business efficiency.
Supported IT infrastructure, process and productivity improvements by suggesting forward-looking enhancements.
Assisted in prompt resolution of technical support issues for office and remote users.
Configured equipment for employee use, ensuring proper installation of cabling, operating systems and related software.
`,
          color: "#ee3c26",
        },
        {
          title: "Freelance WordPress Developer",
          company: "Fiverr Inc.",
          company_url: "http://fiverr.com/",
          logo_path: "fiverr.png",
          duration: "2018 - 2022",
          location: "Remote",
          description: `Built, customized, and maintained a wide range of WordPress websites for small- and medium-scale businesses across various industries. Delivered end-to-end solutions—from theme and plugin integration to SEO optimization, performance tuning, and mobile responsiveness. Collaborated with clients to implement marketing strategies, integrate analytics tools, and run targeted ad campaigns to drive engagement and conversions.`,
          color: "#00b22d",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "St. Petersburg International Gas Forum",
          company: "ExpoForum-International",
          company_url: "https://gas-forum.ru/",
          logo_path: "spigf.png",
          duration: "2024",
          location: "EXPOFORUM, St. Petersburg",
          description:
            "Worked in the halls and press centre, assisted with guest access control and event management.",
          color: "#4285F4",
        },
        {
          title: "International United Cultures Forum",
          company: "SPIUCF",
          company_url: "https://unitedcultures.ru/",
          logo_path: "united_cultures.png",
          duration: "2024",
          location: "Saint Petersburg",
          description:
            "Worked at the information booth, met with guests and assisted with various questions.",
          color: "#e25b47",
        },
        // {
        //   title: "GitHub Student Developer",
        //   company: "GitHub",
        //   company_url: "https://github.com/",
        //   logo_path: "github.png",
        //   duration: "Nov 2019 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Contribute to Open Source Community and Open Source Project.",
        //   color: "#040f26",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide array of cutting-edge technologies. I excel in developing React/Next.js frontends with TypeScript and implementing design systems. Below, you'll find a selection of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jimike.jpeg",
    description:
      "Please feel free to reach out to me via the contact methods listed below. I will respond as promptly as possible. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/jimikeCodes",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Bankify",
      url: "https://bankify-jimike.vercel.app/",
      description:
        "Bankify — is a modern banking platform that allows users to manage their accounts, view transactions and transfer funds between banks. The application is built on the basis of Next.js and uses modern technology to ensure convenience and safety.",
      images: bankifyIimages,
      languages: [
        {
          name: "Next.js",
          iconifyClass: "akar-icons:nextjs-fill",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "catppuccin:tailwind",
        },
        {
          name: "React Hook Form & Zod",
          iconifyClass: "simple-icons:reacthookform",
        },
        {
          name: "Shadcn",
          iconifyClass: "simple-icons:shadcnui",
        },
        {
          name: "Chart.js",
          iconifyClass: "devicon:chartjs-wordmark",
        },
        {
          name: "Appwrite",
          iconifyClass: "devicon:appwrite",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/bankify",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bankify-jimike.vercel.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "0",
      name: "Avito Clone",
      url: "https://jimike-avito-clone.netlify.app",
      description:
        "A listings website that features users' authentication, advanced adverts creation and editing and a ton of other features. My attempt at Avito's 2025 Frontend test.",
      images: avitoCloneImages,
      languages: [
        {
          name: "React.jS",
          iconifyClass: "logos-react",
        },
        {
          name: "Typescript",
          iconifyClass: "devicon:typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "mdi-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "lineicons:expressjs",
        },
        {
          name: "Ant Design",
          iconifyClass: "simple-icons:antdesign",
        },
        {
          name: "Axios",
          iconifyClass: "devicon-plain:axios",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/avito-frontend-trainee-assignment-winter-2025/",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://jimike-avito-clone.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "GymLike",
      url: "https://gymlike.netlify.app",
      description:
        "My little contribution to all gym-goers like me out there :). This multilingual site shows over 1300 exercises with GIFS, detailed instructions and exercise videos to help you reach your fitness goals.",
      images: gymLikeImages,
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Restful API",
          iconifyClass: "dashicons-rest-api",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/GymLike",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://gymlike.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "2",
      name: "GPT-3 Landing Page",
      images: gpt3Images,
      url: "https://github.com/Jimike110/GPT-3",
      description:
        "GPT-3 Landing Page with animations and an AI touch. Followed BEM approach for CSS.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/GPT-3",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://jimike-gpt3.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "Smart Quiz App",
      images: smartQuizAppImages,
      url: "https://github.com/Jimike110/quizApp",
      description:
        "Beautiful, functional and responsive, web-based trivia quiz application that allows users to test their knowledge on select categories of questions. Utilizes The Trivia API's API to generate random questions.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "RESTful API",
          iconifyClass: "dashicons-rest-api",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/quizApp",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://jimike-quiz.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    // {
    //   id: "3",
    //   name: "FinSplit",
    //   url: "https://github.com/rajmahadev8/Fin-Split",
    //   description:
    //     "Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/rajmahadev8/Fin-Split",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devpost",
    //       url: "https://devpost.com/software/finsplit",
    //       iconifyClass: "fluent:window-dev-edit-20-filled",
    //     },
    //   ],
    // },
    {
      id: "4",
      name: "Hacker News Clone",
      images: hackerNewsCloneImages,
      url: "https://github.com/Jimike110/Hacker-News-Clone",
      description:
        "My implementation of Avito's 2022 Frontend Intern test task, a Hacker News clone. This project aims to replicate the functionality of the Hacker News website with a focus on the Home page and News page.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "catppuccin:tailwind",
        },
        {
          name: "RESTful API",
          iconifyClass: "dashicons-rest-api",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/Jimike110/Hacker-News-Clone",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://jimike-hackernews-clone.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
