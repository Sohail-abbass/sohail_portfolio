const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Islamia University of Bahawalpur",
        marks: "CGPA: 3.67/4.00",
        degree: "Bachelor Of Computer Science",
        detail:
          "I pursing my Bachelor of Computer Science degree from Islamia University of Bahawalpur, equipping myself with the knowledge and skills to thrive in the dynamic world of technology. Grateful for the transformative learning experience that prepared me for the professional realm.",
        year: "2022-2026",
      },
      {
        id: 1,
        title: "Government Degree College",
        marks: "Marks: 77%",
        degree: "Intermediate in Computer Science",
        detail:
          "I done my Intermediate in Computer science at The Degree College Skardu, honing my skills for future endeavors in the field. Grateful for the academic opportunities that have shaped my educational path.",
        year: "2019-2021",
      },
      {
        id: 2,
        title: "Govt High School Sukamaidan Skardu",
        marks: "Marks: 82%",
        degree: "Matriculation",
        detail:
          "I completed my matriculation from Govt High School, laying a strong foundation for my academic journey ahead. Grateful for the supportive environment that fostered my growth.",
        year: "2017-2019",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Enigmatix Global",
        role: "Software Engineer (FullStack)",
        url: "https://enigmatixglobal.com/",
        desc: "Full-Stack Developer work in SaaS products end-to-end. Owned critical product flows including onboarding and subscription systems, handling everything from UI to backend logic and payment integration.",
        year: "06/2024 - Present",
        location: "Bahawalpur, Pakistan",
      },
        {
        id: 2,
        title: "Enigmatix Global",
        role: "MERN Stack Intern",
       url: "https://enigmatixglobal.com/",
        desc: "During my Web dev internship, I gained hands-on experience in building full-stack web applications. The program included learning advanced JavaScript, React.js, Node.js, and MongoDB concepts. My focus was on developing scalable backend services and interactive frontend interfaces, further solidifying my understanding of modern web development practices.",
        year: "02/2024 - 05/2024",
        location: "Bahawalpur, Pakistan",
      },
      {
        id: 3,
        title: "Intern",
        role: "React Developer",
        url: "https://sco.gov.pk/software-parks",
        desc: "At technology park, I contributed as a React Developer, focusing on building modular, reusable components and ensuring seamless user experiences. My role involved designing and implementing responsive interfaces, troubleshooting performance issues, and collaborating with team members to meet project requirements within tight deadlines.",
        year: "3/2023 - 06/2023",
        location: "Skardu, Pakistan",
      },
    
     
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
