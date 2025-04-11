import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";

const WhyChooseUs: React.FC = () => {
  return (
    <Container>
      <SectionTitle
        title="Why Choose ReliStay"
        subtitle="The reason we are different than others"
      />
      <div className="text-center flex justify-between">
        <div className="flex flex-col gap-5 p-1 justify-between bg-white rounded-sm shadow py-5 lg:py-10 w-30 sm:w-40 lg:w-60 xl:w-72">
          <p className="text-2xl lg:text-5xl">🏡</p>
          <h3 className="font-bold font-mono text-xs sm:text-sm lg:text-lg">
            Local & Authentic Stays
          </h3>
        </div>
        <div className="flex flex-col gap-5 p-1 justify-between bg-white rounded-sm shadow py-5 lg:py-10 w-30 sm:w-40 lg:w-60 xl:w-72">
          <p className="text-2xl lg:text-5xl">✅</p>
          <h3 className="font-bold font-mono text-xs sm:text-sm lg:text-lg">
          Verified Hosts & Secure Bookings
          </h3>
        </div>
        <div className="flex flex-col gap-5 p-1 justify-between bg-white rounded-sm shadow py-5 lg:py-10 w-30 sm:w-40 lg:w-60 xl:w-72">
          <p className="text-2xl lg:text-5xl">🤝</p>
          <h3 className="font-bold font-mono text-xs sm:text-sm lg:text-lg">
        Empowering Communities
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
