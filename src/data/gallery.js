// src/data/gallery.js
// Replace 'null' image values with actual imported images
// Example: import img1 from '../assets/images/gallery/event1.jpg'
import galleryImage1 from "../assets/images/Pijak.png";
import galleryImage2 from "../assets/images/intern.jpeg";
import galleryImage3 from "../assets/images/campusslife.jpeg";
import galleryImage4 from "../assets/images/iot.jpeg";

export const galleryItems = [
  {
    id: 1,
    title: "Dicoding x IBM — MBKM Program",
    category: "Certification",
    image: galleryImage1,
    description:
      "Completing the Certified Independent Study program with Dicoding and IBM Skills Build.",
    size: "large", // controls grid span
  },
  {
    id: 2,
    title: "Internship at PT Baracipta Esa Engineering",
    category: "Internship",
    image: galleryImage2,
    description:
      "My time as a frontend developer intern — collaborating, building, and learning every day.",
    size: "medium",
  },
  // {
  //   id: 3,
  //   title: "Seminar on AI & Technology",
  //   category: "Event",
  //   image: null,
  //   description:
  //     "Attending a technology seminar focused on AI applications and the future of tech.",
  //   size: "medium",
  // },
  {
    id: 4,
    title: "Project Documentation — AI Growth Monitor",
    category: "Project",
    image: galleryImage3,
    description:
      "documentation from the AI-based child growth monitoring project.",
    size: "small",
  },
  {
    id: 5,
    title: "Project Documentation — IOT Smoking System",
    category: "Project",
    image: galleryImage4,
    description:
      "documentation from the IOT-based smoking detection system project.",
    size: "small",
  },
  // {
  //   id: 6,
  //   title: "Technical Drawing Work",
  //   category: "Work",
  //   image: null,
  //   description:
  //     "A selection of technical drafting and AutoCAD work from academic and freelance projects.",
  //   size: "medium",
  // },
];
