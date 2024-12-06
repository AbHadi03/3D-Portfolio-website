import {
    mobile,
    backend,
    junaid,
    arbaz,
    adnan,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    sql,
    powerbi,
    excel,
    crypto,
    prodigy,
    threejs,
    customerchurn,
    bookstore,
    portfolio,
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
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Power BI",
      icon: powerbi,
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
      name: "Excel",
      icon: excel,
    },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "Prodigy Infotech",
      icon: prodigy,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Machine Learning Projects: Developed models for house price prediction, customer segmentation, image classification, and hand gesture recognition, utilizing RandomForestRegressor, K-Means clustering, CNNs, and deep learning techniques.",
        "Technical Stack: Python, TensorFlow, Keras, OpenCV, NumPy, pandas, scikit-learn, Kaggle API, Jupyter Notebooks.",
      ],
    },
    {
      title: "Data Scientist Intern",
      company_name: "Crypto 24X7",
      icon: crypto,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Engineered 90+ screener formulas using Pandas, converted them to MongoDB queries, and integrated them into the company’s proprietary Large Language Model (LLM) for dynamic cryptocurrency screening.",
        "Created CryptoGPT, a cutting-edge functionality on the website's front page, designed to answer crypto-related queries, enhancing user experience and engagement.",
        "Applied data analysis, data science, and SQL to derive actionable insights and streamline cryptocurrency-related workflows.",
        "Technical Stack: Proficient in Python, SQL, Pandas, MongoDB, and GitHub.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Hadi proved me wrong.",
      name: "Junaid Dhukka",
      designation: "Application Engineer",
      company: "Sulzer",
      image: junaid,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Hadi does.",
      name: "Arbaz Khan",
      designation: "Developer",
      company: "Taxosmart",
      image: arbaz,
    },
    {
      testimonial:
        "After Hadi optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Adnan Kadiwala",
      designation: "Developer",
      company: "Meals on me",
      image: adnan,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Designed a 3D animated portfolio website using Three.js and Tailwind CSS, showcasing my details, skills, projects, experiences, and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Customer Retention",
      description:
        "Built an interactive Power BI dashboard for churn and risk analysis, dynamically updating KPIs and visuals based on date range selections.",
      tags: [
        {
          name: "power bi",
          color: "blue-text-gradient",
        },
        {
          name: "data analysis",
          color: "green-text-gradient",
        },
        {
          name: "excel",
          color: "pink-text-gradient",
        },
      ],
      image: customerchurn,
      source_code_link: "https://github.com/AbHadi03/Call-Center-KPI-Dashboard",
    },
    {
      name: "Book Store",
      description:
        "Developed a dynamic MERN-based web application for managing users and books. Includes premium book access for members and a robust database for users and inventory.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "mongo",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/AbHadi03/bookStoreApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };