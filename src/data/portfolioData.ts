export interface ProfileData {
  name: string;
  role: string;
  affiliation: string;
  email: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
}

export interface EducationData {
  degree: string;
  period: string;
  institution: string;
}

export interface ExperienceData {
  role: string;
  company: string;
  period?: string;
  description: string;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface PublicationData {
  title: string;
  authors: string;
  venue: string;
  doi?: string;
  link?: string;
}

export const portfolioData = {
  profile: {
    name: "Chaitanya Mudunuri",
    fullName: "Chaitanya V C H S Raju",
    role: "AI & Data Science Engineer",
    affiliation: "Accenture",
    email: "satyaramaraju1234@gmail.com",
    linkedin: "https://www.linkedin.com/in/chaitanya-mudunuri-3494a6250/",
    github: "https://github.com/Chaitanya-Mudunuri",
    portfolioUrl: "https://portfolio.chaitanya.mudunuri.co.in/"
  } as ProfileData & { fullName: string },

  education: [
    {
      degree: "B.Tech, Computer Science and Engineering (AI & Data Science)",
      period: "2021 – 2025",
      institution: "University / Engineering College"
    },
    {
      degree: "Board of Intermediate Education (Maths, Physics, Chemistry with Computer Science)",
      period: "2019 – 2021",
      institution: "State Board"
    },
    {
      degree: "Secondary School Education",
      period: "2018 – 2019",
      institution: "Andhra Pradesh State Board"
    }
  ] as EducationData[],

  experience: [
    {
      role: "Software Development Engineer",
      company: "Accenture",
      description: "Contributing to enterprise software development, digital transformation initiatives, and agile cross-functional collaboration."
    },
    {
      role: "Software Development Intern",
      company: "Krify Software Technologies",
      period: "Summer 2024",
      description: "Developed full-stack web applications using JavaScript, React, Node.js, and MongoDB; implemented responsive UI/UX designs, optimized performance, and participated in Agile code reviews."
    }
  ] as ExperienceData[],

  projects: [
    {
      title: "Dual Authenticator",
      description: "Multi-modal security system combining facial recognition and hand gesture authentication.",
      tags: ["Python", "OpenCV", "TensorFlow", "Deep Learning"]
    },
    {
      title: "Facial Recognition System (Dense Crowd)",
      description: "Deep learning model for high-precision facial recognition in crowded environments using IP cameras.",
      tags: ["Python", "PyTorch", "CNN", "Computer Vision"]
    },
    {
      title: "HydroGuardian",
      description: "IoT-based real-time water quality monitoring with sensor networks and predictive data analytics.",
      tags: ["Arduino", "IoT Sensors", "Python", "Data Analytics"]
    },
    {
      title: "BookMyTicket",
      description: "Movie ticket booking platform with real-time seat selection, Gmail notifications, and Razorpay payment integration.",
      tags: ["PEGA", "Gmail API", "Razorpay API"]
    }
  ] as ProjectData[],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 60 }
      ]
    },
    {
      category: "Data Science & AI",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "OpenCV", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 80 }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 }
      ]
    }
  ] as SkillCategory[],

  publications: [
    {
      title: "Enhancing Security With Face Recognition and Hand Gesture",
      authors: "Chaitanya Mudunuri, et al.",
      venue: "International Conference on Computer Vision and Pattern Recognition (ICCVPR)"
    },
    {
      title: "Face Recognition in Dense Crowd Using Deep Learning Approaches With IP Camera",
      authors: "Chaitanya Mudunuri V C H S Raju, et al.",
      venue: "Informatyka, Automatyka, Pomiary W Gospodarce I Ochronie Środowiska, vol. 15, no. 2, June 2025, pp. 44–50",
      doi: "10.35784/iapgos.6818",
      link: "https://doi.org/10.35784/iapgos.6818"
    },
    {
      title: "HydroGuardian: Transformative Water Quality Supervision through IoT Advancements",
      authors: "M. V. C. H. S. Raju, et al.",
      venue: "2024 Intelligent Systems and Machine Learning Conference (ISML), IEEE, Hyderabad, India, pp. 555–559",
      doi: "10.1109/ISML60050.2024.11007409",
      link: "https://doi.org/10.1109/ISML60050.2024.11007409"
    }
  ] as PublicationData[]
};
