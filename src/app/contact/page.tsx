import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="h-screen mt-10 flex flex-col items-center justify-center selection:bg-brown_color pb-24"
    >
      <h2 className="my-2 font-SMUSnow text-blue_color text-xl md:text-2xl selection:bg-redbrown_color">Contact Me</h2>
      <div className="w-96 flex flex-col justify-between mt-10 text-lg">
        <p className="flex justify-center items-center">
          <IoIosCall className="mr-2" />
          443-469-4069
        </p>
        <p className="flex justify-center items-center my-2">
          <CiMail className="mr-2" />
          cjungw730@gmail.com
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
