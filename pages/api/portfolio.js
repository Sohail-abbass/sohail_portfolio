const portfolio = [
  {
    id: 0,
    projectName: "North travel and tours",
    url: "https://toursfrontend-seven.vercel.app/",
    image: "projects/tour.png",
    projectDetail:
"Built a responsive tours and travel website showcasing northern area tour packages. Users can explore different travel packages, view trip details, and submit booking inquiries through an email-based reservation system. The platform features a modern UI, structured package listings, and smooth navigation for an enhanced user experience across devices.",
    technologiesUsed: [
      { tech: "React JS" },
      { tech: "TypeScript" },

      { tech: "Next JS" },
      { tech: "Node JS" },
      { tech: "Express JS" },
       { tech: "Supabase (postgres)" },

      { tech: "Rest API" },
    ],
  },
  {
    id: 1,
    projectName: "Bite-Mate",
    url: "https://github.com/Sohail-abbass/bite-mate",
    image: "projects/bite.png",
    projectDetail:
      "Bite Mate is a full-stack MERN application where users can explore food products, like and comment on items, and make payments using Stripe.",
    technologiesUsed: [
      { tech: "React JS" },
      { tech: "Node JS" },
      { tech: "Express JS" },
      { tech: "MongoDB" },
      { tech: "JavaScript" },
    ],
  },
  {
    id: 2,
    projectName: "Brain tumors detection",
    url: "https://github.com/Sohail-abbass/Brain-tumors-detections",
    image: "projects/safeherit.png",
    projectDetail:
"A deep learning-based system that analyzes MRI scans to detect and classify brain tumors, helping support early diagnosis and improving decision-making in medical analysis",  
  technologiesUsed: [
      { tech: "Python" },
      { tech: "Jupyter Notebook" },
      { tech: "Scikit-learn" },
      { tech: "TensorFlow" },
      { tech: "Streamlit" },
    ],
  },
  {
    id: 3,
    projectName: "Finance Dashboard",
    url: "https://github.com/Sohail-abbass/Finance-Dashboard",
    image: "projects/estra.png",
    projectDetail:
"A financial dashboard that allows users to track income, manage expenses, and visualize financial data through an intuitive and user-friendly interface.",    technologiesUsed: [
      { tech: "React JS" },
      { tech: "TypeScript" },
      { tech: "Echart" },
    ],
  },
 
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
