import Container from "@/components/container";
import Image from "next/image";
import ContactForm from "./components/ContactForm";

const Page: React.FC = () => {
  return (
    <Container className="my-5 lg:my-10">
      <div className="flex items-center justify-center bg-white p-5 lg:p-8 rounded-lg shadow-sm">
        <div className="md:w-2/5 md:flex items-center hidden mt-10">
          <Image
            src="/contact.svg"
            className="max-lg:w-full w-4/5"
            width={100}
            height={100}
            alt="contact"
          />
        </div>
        <div className="w-full md:w-2/5">
          <div className="my-5 lg:my-10">
            <h3 className="text-2xl lg:text-4xl font-medium">Contact Us</h3>
            <p className="text-primary">We would love to hear from you.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default Page;
