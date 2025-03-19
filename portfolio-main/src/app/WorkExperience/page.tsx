"use client";

import { experienceData } from "../../../data/about/experienceData";

export default function WorkExperiencePage() {
    return (
      <section id="work-experience" className="py-32 px-8 text-center">
        <h2 className="text-center font-SMUSnow text-brown_color text-xl md:text-2xl mb-10 selection:bg-redbrown_color">
        Work Experience
        </h2>
        <div className="flex flex-col gap-8 items-center">
          {experienceData.map((exp) => (
            <div key={exp.experienceName} className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-left">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{exp.experienceName}</h3>
                <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
                <p className="text-gray-500 text-sm">{exp.description}</p>
              </div>
              <ul className="list-disc pl-5 text-gray-700">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {exp.urls && exp.urls[0] && (
                <div className="mt-4">
                  <a 
                    href={exp.urls[0]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline"
                  >
                    More Info
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
}
