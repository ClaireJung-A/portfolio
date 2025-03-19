export const project1 = {
  title: "Instagram Clone Coding",
  intro: "Full-Stack Instagram Clone Project",
  description: `This project is a clone of Instagram, implementing core functionalities such as user authentication, post creation, image uploads, likes, comments, and follow/unfollow features. The backend is built using Firebase for authentication and database management, while the frontend is developed with Next.js and Tailwind CSS for a modern and responsive UI.`,
  points: [
    `Implemented user authentication using Firebase Authentication (Google, Email/Password login).`,
    "Developed a responsive UI similar to Instagram with dynamic post feeds.",
    `Enabled real-time post updates, likes, and comments using Firestore database.`,
    `Integrated file upload functionality for profile pictures and posts using Firebase Storage.`,
    `Implemented Redux Toolkit for state management to handle user data and interactions efficiently.`,
  ],
  contribution: [
    {
      title: `Designed and implemented the core features of the Instagram clone.`,
      detail: [
        `Built the authentication system using Firebase Authentication, allowing users to sign up and log in securely.`,
        `Created a real-time post feed using Firestore, enabling users to post images with captions and interact with content.`,
        `Developed a follow/unfollow system to allow users to build their own social network.`,
      ],
    },
    {
      title: `Optimized UI/UX for better user engagement.`,
      detail: [
        `Styled the application using Tailwind CSS to match Instagram's clean and modern UI.`,
        `Implemented infinite scrolling for the feed to improve user experience.`,
        `Added a responsive design to ensure seamless viewing on both mobile and desktop devices.`,
      ],
    },
    {
      title: "Enhanced performance and scalability.",
      detail: [
        `Used Firebase Firestore for real-time data management and optimized queries for efficiency.`,
        `Integrated lazy loading for images to improve page performance.`,
        `Deployed the application on Vercel for fast and scalable hosting.`,
      ],
    },
  ],
  startDate: "2023-12-02",
  endDate: "2023-12-11",
  category: ["Personal"],
  path: "instagram-clone",
  featured: true,
  stacks: ["React", "nextjs", "typescript", "tailwindcss", "firebase", "redux"],
  githubUrl: "https://github.com/ClaireJung-A/instagram-clone",
  docsUrl: "",
  serviceUrl: "",
  images: 5,
};
