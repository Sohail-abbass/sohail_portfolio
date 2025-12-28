// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Hamza Anwar",
    image: "images/hamza.jpeg",
    designation: "React Native | NEXT JS | Node | GraphQL",
    view: "Hello everyone! I'm excited to recommend Muhammad Sohail for any React.js opportunities. I've had the pleasure of collaborating with him on numerous projects, witnessing his profound grasp of React.js and Next.js concepts, consistently delivering top-notch code. Sohail exhibits a strong commitment to learning and development, always eager to take on new challenges. With his reliability and dedication, he's a valuable addition to any React.js team. I highly endorse Muhammad Sohail! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/hamza-anwar01/",
  },
  {
    id: 1,
    name: "Saad bin Abid",
    image: "images/saad.jpeg",
    designation: "React JS | NEXT JS | MUI | GraphQL",
    view: "I've had the honor of collaborating with Sohail on several university projects, and I must emphasize his exceptional talent and strong work ethic. During our time together at Global Software Consulting, Sohail professionalism and meticulous attention to detail were evident, contributing significantly to our team's success. I confidently recommend Muhammad Sohail for any role that requires a highly skilled and committed individual.",
    linkednURL: "https://www.linkedin.com/in/saad-bin-abid/",
  },
  {
    id: 2,
    name: "Sikander Azam",
    image: "images/sikander.jpeg",
    designation: "React Native | Javascript | typescript | ReactJs | Nextjs",
    view: "I enthusiastically endorse Sohail as an accomplished React frontend developer with exceptional UI/UX design skills. His expertise in Node.js further amplifies his capacity to develop resilient and scalable applications. Muhammad Sohail meticulous attention to detail, adept problem-solving abilities, and unwavering commitment to excellence make him an invaluable asset to any development team.",
    linkednURL: "https://www.linkedin.com/in/sikander-azam-899822265/",
  },
  {
    id: 3,
    name: "Mohsin Hussain",
    image: "images/qaiser.jpeg",
    designation: "React JS | Next.JS | Material UI | Graph QL | Cypress",
    view: "I strongly endorse Muhammad Sohail for web frontend development roles. Their proficiency in ReactJS and Next.js, along with their professionalism and unwavering dedication, render them an indispensable addition to any team.",
    linkednURL: "https://www.linkedin.com/in/qaisararsalan/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
