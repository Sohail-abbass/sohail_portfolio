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
        role: "Senior Frontend Engineer",
        url: "https://enigmatixglobal.com/",
        desc: "As a Senior Frontend Engineer, I specialize in developing high-quality, dynamic, and scalable web applications using React.js and Next.js. My responsibilities include crafting user-centric interfaces, optimizing application performance, and leading frontend development initiatives. Collaborating closely with cross-functional teams, I ensure the delivery of exceptional digital experiences.",
        year: "06/2023 - Present",
        location: "Bahawalpur, Pakistan",
      },
      {
        id: 2,
        title: "Software technology",
        role: "React Developer",
        url: "https://sco.gov.pk/software-parks",
        desc: "At technology park, I contributed as a React Developer, focusing on building modular, reusable components and ensuring seamless user experiences. My role involved designing and implementing responsive interfaces, troubleshooting performance issues, and collaborating with team members to meet project requirements within tight deadlines.",
        year: "3/2022 - 06/2023",
        location: "Skardu, Pakistan",
      },
      {
        id: 3,
        title: "Enigmatix Global",
        role: "MERN Stack Intern",
       url: "https://enigmatixglobal.com/",
        desc: "During my frontend development internship, I gained hands-on experience in building full-stack web applications. The program included learning advanced JavaScript, React.js, Node.js, and MongoDB concepts. My focus was on developing scalable backend services and interactive frontend interfaces, further solidifying my understanding of modern web development practices.",
        year: "08/2022 - 2/2023",
        location: "Bahawalpur, Pakistan",
      },
      {
        id: 4,
        title: "Convert Generation Information Technology ",
        role: "WordPress Developer",
        url: "https://www.cgit.pk/",
        desc: "As a WordPress Developer at CGIT, I designed and developed visually appealing, responsive websites tailored to client requirements. My responsibilities included customizing themes, enhancing frontend features, and maintaining website performance and security. I consistently delivered quality solutions that met and exceeded client expectations.",
        year: "10/2020 - 07/2022",
        location: "Skardu, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
