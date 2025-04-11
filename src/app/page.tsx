import Container from "@/components/container";
import Destinations from "./(home)/components/destinations/Destinations";
import Hero from "./(home)/components/hero/Hero";
import Recommended from "./(home)/components/recommended/Recommended";
import Stat from "./(home)/components/stat/Stat";
import WhyChooseUs from "./(home)/components/why-chooseus/WhyChooseUs";

const Home = () => {
  return (
    <div className="space-y-10 lg:space-y-16">
      <Hero />
      <WhyChooseUs />
      <Stat />
      <Container className="space-y-10 lg:space-y-16">
        <Destinations />
        <Recommended />
      </Container>
    </div>
  );
};

export default Home;
