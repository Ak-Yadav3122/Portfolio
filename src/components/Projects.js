// Import images from assets
import musicAcademyImage from "./assets/music-academy-ss.png";
import jobportalImage from "./assets/job-portal-ss.png";
import interviewPlateformImage from "./assets/video-Interview-ss.png";

const projects = [
  {
    id: 1,
    title: "Music Academy",
    description:
      "The Music Academy project, developed with Next.js, provides an engaging, high-performance platform for music education. Utilizing Next.js’ server-side rendering (SSR) and static site generation (SSG), it ensures fast load times, enhancing user experience. The platform includes personalized user dashboards, enabling students to track progress and enroll in classes",
    image: musicAcademyImage, // Path to the thumbnail image
    video: "/video/musicAcademy.gif", // Path to the video file

    liveLink: "https://music-academy-drab.vercel.app/",
    githubLink: "https://github.com/Ak-Yadav3122/Music-Academy",
  },
  {
    id: 2,
    title: "JOB PORTAL",
    description:
      "Users can search and apply for jobs that fit their preferences and skill set. Employers can create profiles, post job openings, manage applications, and interact with potential candidates through a dedicated dashboard.",
    image: jobportalImage,
    video: "/video/JobPortal.gif",
    liveLink: "https://job-portal-xi-six.vercel.app/",
    githubLink: "https://github.com/Ak-Yadav3122/Job-Portal",
  },
  {
    id: 3,
    title: "Interview-Plateform",
    description:
      "It is a online interview platform and a real-time video call application with secure user authentication, allowing users to sign up, log in, and manage their interviews. With a user-friendly interface, Interviewer can create, edit, and delete enterview schedule, all while enjoying a secure, personalized experience.",
    image: interviewPlateformImage,
    video: "/video/InterviewPlateform.gif",
    liveLink: "https://interview-plateform.vercel.app/",
    githubLink: "https://github.com/Ak-Yadav3122/Interview-Plateform",
  },
];

export default projects;
