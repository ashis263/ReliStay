import Search from "./components/Search";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/assets/hero-image.jpg')] opacity-70 bg-cover bg-no-repeat h-[70vh] lg:h-[82vh]"></div>
      <div className="w-4/5 sm:w-2/3 mx-auto absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl lg:text-5xl text-primary font-bold mb-4">
          Discover Reliable Homestays Across Bangladesh
        </h1>
        <p className="lg:text-lg sm:text-muted-foreground mb-6">
          ReliStay connects travelers with trusted local hosts in every corner
          of Bangladesh from bustling cities to peaceful villages. Book your
          perfect stay and experience local life like never before.
        </p>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
