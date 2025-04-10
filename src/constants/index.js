import {
  one,
  two,
  three,
  four,
  futa,
  mataa,
  gadget,
  kuncha,
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
  carrent,
  mobileAppPoster,
  projectPoster,
  behindTheSeen,
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
    icon: futa,
  },
  {
    icon: mataa,
  },
  {
    icon: gadget,
  },
  {
    icon: kuncha,
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

const mobileAppBenefits = [
  {
    title: "Comprehensive Monitoring",
    category: "For Owner",
    icon: one,
    iconBg: "#383E56",
    date: "OWNER",
    features: [
      "Instant alerts when a vehicle exceeds the preset speed limit.",
      "Automated fire detection with an ESP32 sensor.",
      "Real-time temperature tracking for optimal vehicle performance.",
      "Proactive maintenance alerts based on sensor diagnostics.",
    ],
  },
  {
    title: "Stealth Tracking",
    category: "For Owner",
    icon: two,
    iconBg: "#E6DEDD",
    date: "OWNER",
    features: [
      "Live vehicle location tracking at your fingertips.",
      "Concealed installation to deter theft and keep the tracker hidden.",
      "Geo-fencing notifications for enhanced security.",
      "Historical route tracking for detailed travel insights.",
    ],
  },
  {
    title: "Intuitive Controls",
    category: "For Driver",
    icon: three,
    iconBg: "#383E56",
    date: "DRIVER",
    features: [
      "Remote activation of the vehicle buzzer for secure parking.",
      "Customizable control options tailored to your preferences.",
      "User-friendly interface for effortless system management.",
      "Instant feedback on control commands for smooth operation.",
    ],
  },
  {
    title: "Emergency Response",
    category: "For Driver",
    icon: four,
    iconBg: "#E6DEDD",
    date: "DRIVER",
    features: [
      "Direct emergency call feature to instantly alert the owner during crises.",
      "One-touch SOS activation for immediate assistance.",
      "Automated location sharing during emergencies for accurate response.",
      "Real-time status updates during critical situations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "SmartTrack revolutionized our fleet management—its real-time tracking and automated booking cut operational costs by 30% while enhancing user security. A game-changer for modern rentals!",
    name: "Dr. (Mrs.) Jananie Jarachanthan",
    designation: "Senior Lecturer Grade II",
    company: "Department of Computer Engineering",
    image: "https://www.eng.jfn.ac.lk/wp-content/uploads/Staff_photos/jananie.jpg",
  },
  {
    testimonial:
      "Finally, a platform that works seamlessly across providers! The intuitive interface and predictive maintenance alerts make renting safer and hassle-free.",
    name: "Mr.S.Nishankar",
    designation: "Lecturer(On Contract)",
    company: "Department Of Computer Engineering",
    image: "https://www.eng.jfn.ac.lk/wp-content/uploads/Staff_photos/nishankar.jpg",
  },
  {
    testimonial:
      "From IoT integration to user analytics, SmartTrack balances innovation with practicality. Our clients love the transparency, and our team loves the efficiency.",
    name: "Dr. (Mrs.) Pratheeba Jeyananthan",
    designation: "Senior Lecturer Grade II",
    company: "Head, Department of Computer Engineering",
    image: "https://www.eng.jfn.ac.lk/wp-content/uploads/2017/01/pratheeba.jpg",
  },
];

const projects = [
  {
    name: "Mobile App Gallery",
    description:
      "Showcases user-friendly interfaces and functional mobile solutions for streamlined car rentals, emphasizing cross-platform performance and real-time features.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mobileAppPoster,
    source_code_link: "/MobileGallery",
  },
  {
    name: "Project Gallery",
    description:
      "Highlights full-stack development of scalable platforms, integrating APIs and databases for seamless car booking, payment, and fleet management.",
    tags: [
      {
        name: "esp32",
        color: "blue-text-gradient",
      },
      {
        name: "mqtt",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: projectPoster,
    source_code_link: "/ProjectGallery",
  },
  {
    name: "Behind the Seen",
    description:
      "Reveals iterative design processes, prototyping, and collaborative problem-solving to balance technical constraints with user-centric outcomes.",
    tags: [
      {
        name: "pcb",
        color: "blue-text-gradient",
      },
      {
        name: "foe",
        color: "green-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
    ],
    image: behindTheSeen,
    source_code_link: "/BehindTheSeenGallery",
  },
];

export { services, technologies, mobileAppBenefits, testimonials, projects };
