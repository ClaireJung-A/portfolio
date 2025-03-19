# 🌊 Portfolio Project
Project Introduction
This is a portfolio website showcasing my frontend development projects, skills, and experiences in one place. For seamless navigation, clicking on a menu item in the header enables smooth scrolling to the respective section. Additionally, clicking on each project opens a modal displaying detailed descriptions. A responsive design is applied to ensure proper rendering across various devices and screen sizes.

<br/>
Next.js (v13+)
This project adopts a hybrid approach by combining Static Site Generation (SSG) and Server-Side Rendering (SSR), selecting the most optimized rendering strategy per page. By primarily utilizing SSG, initial loading time (TTV) is reduced, improving SEO. For pages using Client-Side Rendering (CSR), dynamic imports are applied to minimize JavaScript loading time.

<br/>
🌊 Visit the Portfolio Site

<br/> <br/>


Project Overview
🎈 Project Duration: 231109 ~ (Currently being improved, so some details may differ from the latest version.)

🌊 Project Structure: About | Skills | Projects | Contact

✨ Key Features:

Responsive web design
Simple email sending feature
Framer Motion animations
<br/> <br/>
Tech Stack

<br/> <br/>
Features & UI Overview
This project is under continuous improvement, so the actual design and structure may vary.

<br/>
About Page
A custom hook useTypewords was developed to create a typing effect for the website logo. Additionally, the Framer Motion library was used to implement a slot machine effect.

<br/>


<br/> <br/>
Simple Email Sending Feature
nodemailer was used to enable simple email sending functionality. The email is sent through client-server communication. The client sends a POST request with form data to the api/contact/routes.ts endpoint, which validates the data and then sends the email using nodemailer. Since this API runs on the server, it can safely use Node.js-based libraries.

<br/> <details> <summary>api/contact/routes.ts</summary>
import * as yup from "yup";
import { sendEmail } from "@/service/email";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: "🚨 Email sending failed." }),
      {
        status: 400,
      }
    );
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "Email sent successfully." }),
          {
            status: 200,
          }
        )
    )
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "Email sending failed." }),
        {
          status: 500,
        }
      );
    });
}
</details> <br/> <br/>


<br/> <br/>
The received email appears as follows:

<br/>


<br/> <br/>
Responsive Web Design
A responsive web design was implemented to ensure the website adapts to different screen sizes and devices.

<br/>


<br/>
The header menu layout also changes dynamically based on the screen size.

<br/>

Copyright
© 2024 eeeyooon.

<br/> <br/>
Planned Updates
 Project filtering feature
 Design improvements for the About (onboarding) page
 Structural and design improvements for the project detail page
 Updating project data (+ adding project images)
 Adding an active state to the header based on scroll position
 Implementing a state management library to prevent props drilling
 Updating this README with the latest improvements
<br/> <br/>
Folder Structure
📦src
 ┣ 📂app
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂contact
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂contact
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂projects
 ┃ ┃ ┣ 📂[slug]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂skills
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂about
 ┃ ┃ ┣ 📜AboutContent.tsx
 ┃ ┃ ┗ 📜SlotMachine.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┗ 📜ScrollArrow.tsx
 ┃ ┗ 📂skills
 ┃ ┃ ┣ 📜SkillCard.tsx
 ┃ ┃ ┗ 📜SkillGrid.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useTypeword.ts
 ┗ 📂types
 ┃ ┣ 📜projects.ts
 ┃ ┗ 📜skills.ts
<br/> <br/>
Libraries Used
json

"dependencies": {
    "next": "14.0.1",
    "react": "^18",
    "react-icons": "^4.12.0",
    "framer-motion": "^10.16.5",
    "nodemailer": "^6.9.8"
  }
