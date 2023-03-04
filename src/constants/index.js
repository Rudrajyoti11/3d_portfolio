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
    meta,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Unicompiler",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rudra proved me wrong.",
      name: "Arindam Bhattacharjee",
      designation: "CFO",
      company: "Google",
      image: "https://scontent.fixb1-1.fna.fbcdn.net/v/t39.30808-6/282694026_1132015397654000_3654777496348649173_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=umc3v30YbLwAX_-CIyI&_nc_ht=scontent.fixb1-1.fna&oh=00_AfC44peh5KWwzLT76OPg6rtp1N95p_-nWylDXOA3My7abQ&oe=6409550E",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rudra does.",
      name: "Farhaj Mallick",
      designation: "COO",
      company: "Amazon",
      image: "https://scontent.fixb1-1.fna.fbcdn.net/v/t39.30808-6/258882439_1750136075192476_3791548748117978050_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qCNCongUxrEAX-iMlZi&_nc_oc=AQlFQvEM68kQH2lH1LliweKSK74oEGjnUxtVkSmh81NhM-IdmemGiRQQk-SSFo6zNZ3W3CIMklrwnS9ybtNWh1LO&_nc_ht=scontent.fixb1-1.fna&oh=00_AfAE5m94UltzKDHwPkDK-x6PNNjPWE2_e7MACtAfJM88mA&oe=640942CE",
    },
    {
      testimonial:
        "After Rudra optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Bhaskar Roy",
      designation: "Microsoft",
      company: "456 Enterprises",
      image: "https://scontent.fixb1-1.fna.fbcdn.net/v/t39.30808-6/322995503_192387720068775_8083706396761532784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hTbKmbwlsMYAX9QWLDd&_nc_ht=scontent.fixb1-1.fna&oh=00_AfCUtEs_HRb4YsENpgzx-Zq_KKPnj-6xR0KUo3cu2sNORg&oe=6408DDED",
    },
  ];
  
  const projects = [
    {
      name: "Online food order app",
      description:
        "Web-based application that allows users to order food from their favorite restaurants or cafes. The app typically provides a list of restaurants and menus in the user's area, along with reviews, ratings, and photos to help users choose the best option.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Rudrajyoti11/FoodWebsite",
    },
    {
      name: "Music App",
      description:
        "Web application that enables users to search for songs based on their current mood.This music apps offer features such as streaming, downloading, and sharing music with friends. They may also include features such as lyrics, album artwork, and music videos. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Rudrajyoti11/Music_play",
    },
    {
      name: "Quiz App",
      description:
        "The app typically provides multiple-choice questions with four possible answers, and users must select the correct one to score points. The questions can be presented in different formats, such as text, images, or videos, depending on the app's design.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Rudrajyoti11/Music_play/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  