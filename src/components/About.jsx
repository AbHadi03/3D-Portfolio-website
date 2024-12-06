import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img 
          src={icon} 
          alt="web-development"
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
    >
      Highly skilled Data Analyst with expertise in data analysis, data visualization, machine learning, and predictive modeling. I hold a Master’s in Information Technology (CGPA: 8.57/10) and have completed internships at BCG X and Accenture, where I utilized statistical analysis, Python, SQL, and advanced Excel to deliver actionable insights. At BCG X, I achieved 90% accuracy in customer churn prediction using a Random Forest model, and at Accenture, I conducted EDA and trend analysis for strategic decisions. Skilled in tools like Power BI, Tableau, and Snowflake, I excel in data cleaning, A/B testing, and building data pipelines. Proficient in deep learning frameworks like TensorFlow and PyTorch, I specialize in GANs, transformers, and cloud data warehousing. Passionate about delivering impactful insights, I combine technical expertise with a business-driven approach to problem-solving.

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");