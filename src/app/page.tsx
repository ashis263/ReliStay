import Destinations from "./(home)/components/destinations/Destinations";
import Hero from "./(home)/components/hero/Hero";
import Stat from "./(home)/components/stat/Stat";

const Home = () => {
  return (
    <div className="space-y-10 lg:space-y-16">
      <Hero />
      <Stat />
      <Destinations />
    </div>
  );
};

export default Home;
