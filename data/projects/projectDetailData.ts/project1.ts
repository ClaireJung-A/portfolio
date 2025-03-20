export const project1 = {
  title: "Instagram Clone Coding",
  intro: "Full-Stack Instagram Clone (Mobile App)",
  description: `This project is a mobile application that replicates core Instagram functionalities, including user authentication, post creation, image uploads, likes, comments, and a follow/unfollow system. The frontend is built using React Native with Expo for cross-platform support, while the backend leverages Firebase for authentication, Firestore for real-time database management, and Firebase Storage for media handling.`,

  points: [
    `Implemented user authentication using Firebase Authentication (Google & Email/Password login).`,
    "Developed a modern, responsive UI with React Native and Expo.",
    `Enabled real-time post updates, likes, and comments using Firestore with batched writes for performance.`,
    `Integrated Firebase Storage for efficient media file uploads, including profile pictures and posts.`,
    `Optimized state management using React Context API and Zustand instead of Redux for a lightweight and scalable approach.`,
  ],

  contribution: [
    {
      title: `Designed and implemented the core features of the Instagram clone.`,
      detail: [
        `Developed the authentication system with Firebase Authentication, including persistent login and OAuth integration.`,
        `Created a real-time post feed using Firestore, enabling users to post images, captions, and interact via likes and comments.`,
        `Implemented a follow/unfollow system using Firestore security rules and batched queries for efficient data retrieval.`,
      ],
    },
    {
      title: `Optimized UI/UX for mobile experience.`,
      detail: [
        `Styled the app using React Native's styling API and Tailwind CSS for a modern UI.`,
        `Integrated infinite scrolling for smooth and continuous feed navigation.`,
        `Implemented gesture-based interactions using React Native Gesture Handler for intuitive user actions.`,
      ],
    },
    {
      title: "Improved performance and scalability.",
      detail: [
        `Used Firebase Firestore with index-based queries to optimize performance and minimize reads.`,
        `Added lazy loading for images using React Native Fast Image to enhance speed and memory efficiency.`,
        `Deployed the app using Expo with EAS (Expo Application Services) for seamless cross-platform distribution.`,
      ],
    },
  ],

  startDate: "2023-06-18",
  endDate: "2023-07-21",
  category: ["Personal"],
  path: "instagram-clone",
  featured: true,
  stacks: ["react", "expo", "typescript", "tailwindcss", "firebase"],
  githubUrl: "https://github.com/ClaireJung-A/instagram-clone",
  docsUrl: "",
  serviceUrl: "https://expo.dev/@clairejung/instagram-clone", // Replace with actual link after Expo deployment
  images: 5,
};
