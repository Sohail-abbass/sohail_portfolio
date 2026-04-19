const expertise = [
  {
    id: 0,
    title: "Software Engineer",
    desc: "Full-Stack MERN Developer with 2+ years of experience delivering scalable, production-ready SaaS applications. Combines strong frontend execution with backend system design and a product-driven approach. Focused on building features that improve user engagement, conversion, and long-term growth.",
  },
  {
    id: 1,
    title: "Problem-Solving and Logic Building",
    desc: "I excel at breaking down complex problems into manageable solutions through logical analysis and creative thinking. Whether debugging intricate issues, optimizing performance, or designing scalable systems, I approach challenges methodically to deliver effective and efficient results.",
  },
 
  {
    id: 2,
    title: "Strong Communication Skills",
    desc: "Effective communication is at the core of my collaboration with cross-functional teams, ensuring that project requirements are clearly understood, timelines are met, and expectations are managed efficiently.",
  },
  {
    id: 3,
    title: "Leadership and Mentorship",
    desc: "As a mentor to junior developers, I provide guidance on coding best practices, problem-solving strategies, and project management techniques to help them grow and excel in their careers.",
  },
  {
    id: 4,
    title: "Continuous Learning",
    desc: "I actively stay updated with the latest technologies and trends in web development, such as advancements in React, Next.js, TypeScript, and other frameworks, ensuring that my skills remain relevant and cutting-edge.",
  },
 
  {
    id: 5,
    title: "Scrum and Agile Methodologies",
    desc: "Experienced in Agile methodologies, especially Scrum, using tools like Jira for task management, sprint planning, and progress tracking. I actively participate in stand-ups and retrospectives to ensure the delivery of high-quality software solutions.",
  },
 
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
