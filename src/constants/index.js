import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const NavLink = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "St. Vincent's School, Pune",
      icon: starbucks,
      iconBg: "#ffffff",
      date: "March 2008 - April 2018",
      points: [
        "Studied wide variety of subjects like English, Maths, Science, German, Hindi, etc. and developed social skills",
        "Achieved 92.8% in 10th and first prize in Maths",
      ],
    },
    {
      title: "Junior College student",
      company_name: "AEF",
      icon: tesla,
      iconBg: "#ffffff",
      date: "Jan 2018 - June 2020",
      points: [
        "Studied CS and various programming languages and technologies",
        "Achieved multilple Abacus rewards and high score in national exams",
      ],
    },
    {
      title: "College Student",
      company_name: "MIT ADTU, Pune",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Dec 2020 - June 2024",
      points: [
        "Learned Web development, blockchain, cloud, github, AI/ML, IoT and various cutting-edge technologies",
        "Achieved 2nd prize for project on Engineer's Day 2023",
        "Final year project copyrighted and published in Journal",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Shafin proved me wrong.",
      name: "Kevin Soze",
      designation: "CEO",
      company: "Soze Marketing",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Shafin does.",
      name: "Aditya Kumar",
      designation: "Founder",
      company: "@nomadicadii",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Shafin optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "ExoticNFT",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Artful Royalties",
      description:
        "Artful Royalties is a subscription-based AI image generation service that allows users to generate realistic images based on prompts. The artists receive a fair share of the revenue generated from their artworks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Lorddemonort/Artful-Royalties",
    },
    {
      name: "weAssist",
      description:
        "A Machine Learning app that can help deaf, dumb or blind people commuicate with each other with scope of availability of different devices that can be used by specially-abled people",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Promptzilla",
      description:
        "A chrome extension that helps in predicting prompts, gives best prompts to use for any AI model like Chatgpt, Midjourney, Invideo, etc. and also shows preview results before entering prompts.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Lorddemonort/promptzilla",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };