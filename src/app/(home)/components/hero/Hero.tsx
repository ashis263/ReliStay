import Container from "@/components/container";
import { Select } from "@/components/select";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="h-[480px] rounded-sm relative">
        <Image
          src={"/assets/hero-image.jpg"}
          alt="hero image"
          width={500}
          height={300}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />

        <div className="bg-white rounded-sm p-4 absolute z-20  lg:w-8/12 w-11/12 left-1/2 -bottom-24 shadow  -translate-x-1/2 ">
          <Select />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          exercitationem, cum, in, modi explicabo quas nesciunt laudantium
          soluta nostrum doloribus voluptates impedit? Sequi alias expedita quis
          dolor aliquid, corrupti non.
        </div>
      </div>
      <div>
        <video
          id="my-video"
          className="video-js"
          autoPlay
          controls
          preload="auto"
          width="640"
          height="264"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
        >
          <source
            src="https://videocdn.cdnpk.net/videos/5b68b560-422a-4fd1-871b-1bcddf2af118/horizontal/previews/clear/large.mp4?token=exp=1743617406~hmac=0d6f342bdfaaae75f6561849102eea00d82065829d831e810437b2dbdb26c0cb"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </Container>
  );
};

export default Hero;
