"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const ScrollDown = dynamic(() => import("@/components/common/ScrollDown"));

const techStack = [
  {
    category: "Language",
    technologies: [
      { name: "Python", src: "/images/tech/language/Python11.svg" },
      { name: "C++", src: "/images/tech/language/cpp.svg" },
      { name: "TypeScript", src: "/images/tech/language/TypeScript11.svg" },
      { name: "SQL", src: "/images/tech/language/sql.svg"},
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React", src: "/images/tech/frontend/React11.svg" },
      { name: "Next.js", src: "/images/tech/frontend/Next.js.svg" },
      { name: "HTML5", src: "/images/tech/frontend/HTML5.svg" },
      { name: "Tailwind CSS", src: "/images/tech/frontend/css.svg" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", src: "/images/tech/backend/Node.js.svg" },
      { name: "Express.js", src: "/images/tech/backend/Express.svg" },
      { name: "Flask", src: "/images/tech/backend/Flask.svg" },
      { name: "FastAPI", src: "/images/tech/backend/FastAPI.svg" },
    ],
  },
]; 

const bottomTechStack = [
  {
    category: "Databases",
    technologies: [
      { name: "PostgreSQL", src: "/images/tech/database/postgresql.svg" },
      { name: "MySQL", src: "/images/tech/database/MySQL11.svg" },
      { name: "Elastic Search", src: "/images/tech/database/ElasticSearch.svg" },
      { name: "Firebase", src: "/images/tech/database/Firebase.svg" },
      { name: "Redis", src: "/images/tech/database/Redis.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "Amazon S3", src: "/images/tech/Cloud&Devops/s3.svg" },
      { name: "Azure", src: "/images/tech/Cloud&Devops/Azure.svg" },
      { name: "Docker", src: "/images/tech/Cloud&Devops/Docker.svg" },
      { name: "Kubernetes", src: "/images/tech/Cloud&Devops/Kubernetes.svg" },
      { name: "GitHub", src: "/images/tech/Cloud&Devops/GitHub.svg" },
    ],
  },
];

export default function TechStackPage() {
    return (
      <section className="py-4 px-4 text-center">
        <h2 className="text-center font-SMUSnow text-brown_color text-xl md:text-2xl mb-10 selection:bg-redbrown_color">
        Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="h-fit flex flex-col items-center">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={50}
                      height={50}
                      className="rounded-md shadow-sm"
                    />
                    <p className="text-sm text-gray-700 mt-2">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-8 mt-10">
          {bottomTechStack.map((category) => (
            <div key={category.category} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="h-fit flex flex-col items-center">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={50}
                      height={50}
                      className="rounded-md shadow-sm"
                    />
                    <p className="text-sm text-gray-700 mt-2">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
