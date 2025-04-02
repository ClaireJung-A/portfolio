import { experience } from "@/types/experience";

export const experienceData: experience[] = [
  {
    experienceName: "Strategy (MicroStrategy)",
    description: "Data Analytics Engineering Intern",
    startDate: "2024-05-01",
    endDate: "2024-08-01",
    points: [
      "Implemented keyword extraction for user queries using prompt engineering and custom data pipeline logic; captured key fields like product name and version to improve retrieval accuracy.",
      "Investigated hallucinations in RAG-based chatbot caused by outdated certification data and  incorrect parsing of structured inputs; built a new pipeline using SQL, Python, and vector search to better handle data from PostgreSQL, collaborating with PMs and engineers  to ensure documentation was current.",
      "Researched hallucination mitigation via multi-query retrieval strategies and graph databases on PostgreSQL vector stores; Built FastAPI endpoints to validate system behavior, and pushed chatbot responses to DBeaver for expert grading."
    ],
    urls: [""],
  },
  {
    experienceName: "LG",
    description: "Software Development Engineering Intern",
    startDate: "2023-06-01",
    endDate: "2023-08-01",
    points: [
      "Developed and deployed a full-stack web application using React, Redux, Express.js, and Node.js, featuring secure authentication, REST APIs, and Docker containerization, and deployment on AWS EC2.",
      "Built 15+ reusable front-end components using React,, HTML, CSS, and Canva, enhancing UI/UX consistency and reducing development time for future features by 30%.",
      "Unveiled customer payment preferences with Pandas and Principal component analysis(PCA), identifying trends that increased market reach by 3.2% and revenue by 4%, and visualized findings with Tableau."
    ],
    urls: [""],
  },
  {
    experienceName: "XNODE.AI",
    description: "Product Manager",
    startDate: "2024-08-01",
    endDate: "2024-12-01",
    points: [
      "Optimized user experience and product performance for an AI-driven SaaS platform through in-depth market research.",
      "Identified pain points and usability challenges via user interviews, leading to enhanced feature prioritization.",
      "Worked cross-functionally in Agile sprints to develop data-driven solutions that streamlined workflows and improved functionality."
    ],
    urls: [""],
  },
  {
    experienceName: "Johns Hopkins University",
    description: "Undergraduate Research Assistant",
    startDate: "2022-01-01",
    endDate: "2023-05-01",
    points: [
      "Conducted research on NLP models for cognitive science applications.",
      "Optimized deep learning architectures for sentiment analysis and text generation.",
      "Published research findings in academic conferences."
    ],
    urls: [""],
  }
];
