import { FaUniversity, FaSchool } from "react-icons/fa";

export const educationData = [
  {
    year: "2021 - 2025",
    title: "B.Tech Computer Science and AI",
    institution: "Amrita Vishwa Vidyapeetham, Kerala",
    icon: <FaUniversity className="w-6 h-6 text-orange-500" />,
    highlights: ["CGPA: 8.31/10", "Specialization in AI & Machine Learning","Merit based full scholarship"],
  },
  {
    year: "2017 - 2019",
    title: "Higher Secondary Education",
    institution: "Pentagon International College, Kathmandu, Nepal",
    icon: <FaSchool className="w-6 h-6 text-orange-500" />,
    highlights: [
      "Scored 3.36 GPA out of 4 GPA",
      "Physics: A subject of strong interest and performance",
      "Mahatma Gandhi Scholarship",
    ],
  },
  {
    year: "2015 - 2017",
    title: "Secondary Education",
    institution: "Maisthan Vidyapeeth MA VI, Birgunj, Nepal",
    icon: <FaSchool className="w-6 h-6 text-orange-500" />,
    highlights: [
      "Scored 3.40 GPA out of 4 GPA",
      "2nd place in District-level Essay Writing",
      "Participated in State Science Exhibition",
    ],
  },
];

export const projectsData = [
  {
  id: 4,
  title: "Aura – Next-Generation Streaming Platform",
  type: "Full Stack Development",
  image:
    "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPnOZcBYoA4UurhgL2WIO5ajsFS0VxfmKBeJRz",
  highlights: [
    "High-quality video streaming powered by Mux",
    "Creator Studio for uploading and managing videos",
    "Immersive 'Midnight Ember' UI with premium gradients",
    "Real-time updates with tRPC + React Query",
    "Secure user authentication using Clerk",
  ],
  github: "https://github.com/singhnikhil01/aura",   // (replace if needed)
  demo: "https://aura-video.vercel.app/",            // (replace if needed)
  details: {
    overview:
      "Aura is a next-generation video streaming platform designed for creators and communities. Built with modern technologies like Next.js 15, Mux, Clerk, and tRPC, it delivers an immersive streaming experience with a premium UI, creator tools, and real-time performance.",
    challenges: [
      "Implementing real-time updates with tRPC",
      "Optimizing high-quality video playback",
      "Designing a smooth Creator Studio workflow",
      "Managing secure authentication and rate limiting"
    ],
    architecture:
      "Next.js (App Router) → tRPC → PostgreSQL (Neon) → Mux → Clerk → Uploadthing → Upstash Redis",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Mux",
      "Clerk",
      "Uploadthing",
      "tRPC",
      "TanStack Query",
      "Upstash Redis"
    ],
    images: [
      "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPnOZcBYoA4UurhgL2WIO5ajsFS0VxfmKBeJRz"
    ],
  },
},

  {
    id: 1,
    title: "InsightInk a Blog Website",
    type: "web Development",
    image:
      "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPJlNXZu43Ng6TMvmUS5BDKutkIw91fpbZ03YW",
    highlights: [
      "Password and Google based Authentication",
      "AWS S3 bucket for media storage ",
      "Block based blog editing system",
    ],
    github: "https://github.com/singhnikhil01/InsightInk",
    demo: "https://blogs.nikhilsingh.com.np",
    details: {
      overview:
        "Developed an interactive blogging platform using React, Node.js, and MongoDB to provide users with an engaging space to share their thoughts and experiences",
      challenges: ["UI design", "Comments Handling"],
      architecture: "Mongodb → Nodejs → S3 Bucket → React",
      stack: ["React", "AWS", "Node JS", "Mogodb", "Firebase"],
      images: [
        "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPJlNXZu43Ng6TMvmUS5BDKutkIw91fpbZ03YW",
        "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPdAOjfKM4jNVTFA2lLR0y6irH5DoatnsxwBkc",
      ],
    },
  },
  {
    id: 2,
    title: "Blood Donation Management System",
    type: "Full Stack Development",
    image: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPnUeEsMvoA4UurhgL2WIO5ajsFS0VxfmKBeJR",
    highlights: [
      "Real-time blood inventory tracking",
      "Secure role-based access control",
      "Admin panel with all access and control",
    ],
    github: "https://github.com/singhnikhil01/Blood-Bank-Management-system",
    demo: "https://blood-bank-management-system-gddr.onrender.com",
    details: {
      overview:
        "Developed a Django-based Blood Donation Management System to streamline the process of blood donation, inventory management, and donor engagement. The system facilitates efficient matching of blood donors and recipients while ensuring secure data handling for privacy protection.",
      challenges: [
        "Real-time data analysis for the admin",
        "Ensuring secure storage and processing of sensitive information",
      ],
      architecture: "Django → SQLlite → templete",
      stack: [
        "Python (Django)",
        "JavaScript",
        "HTML/CSS",
        "SQLlite"
      ],
      images: ["https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrPnUeEsMvoA4UurhgL2WIO5ajsFS0VxfmKBeJR"],
    },
  },

  {
    id: 3,
    title: "Pneumonia Detection",
    type: "Computer Vision",
    image: "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrP9xzIpie6Mducvlmi9fahQ83OTwEJproI7BzY",
    highlights: [
      "Streamlit app with friendly interface",
      "Predict Pneumonia with 90% accuracy",
      "Open-source model architecture available for study and use",
  ],  
    github: "https://github.com/singhnikhil01/Pneumonia-detection",
    demo: "https://pneumonia-detection-7hwwvaqmc8ndvxntzjo4pm.streamlit.app/",
    details: {
      overview:
        "Built a user friendly streamlit website for pneumonia detection  ",
      challenges: ["Transfer Learning","Maintaing High Accuracy"],
      architecture: "Data → Model → Streamlit → Result",
      stack: ["Python","OpenCV", "TensorFlow","Streamlit","Pillow"],
      images: ["https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrP9xzIpie6Mducvlmi9fahQ83OTwEJproI7BzY", "https://ajuo8pgnwp.ufs.sh/f/FHfjqH6Z9VrP9xzIpie6Mducvlmi9fahQ83OTwEJproI7BzY"],
    },
  },
];


export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projectsData.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.details?.overview,
      applicationCategory: project.type,
      operatingSystem: "Web",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects#project-${project.id}`,
      author: {
        "@type": "Person",
        name: "Nikhil Singh",
      },
      keywords: project.details?.stack?.join(", ") || "",
      image: `${project.image}?format=webp`,
    },
  })),
};
