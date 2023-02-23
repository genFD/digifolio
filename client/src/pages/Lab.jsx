import { Footernav, LabCard, Title } from "../components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ReactPlayer from "react-player";
import LabContainer from "../components/LabContainer";
import Carousel from "../components/Carousel";
import Cardx from "../components/Cardx";
import Cardxl from "../components/Cardxl";
function Lab() {
  return (
    <div className="projects-container">
      <div
        className="mt-10
    laptop:mt-20 mx-[3%] tablet:mx-[5%] min-w-[460px]"
      >
        <div>
          <Title>Getting Started with DevOps</Title>
          <p className="text-body-1 about-description font-IBM mt-6">
            Take your first step into the world of DevOps with this selection of
            content, which will teach you about the methodologies and tools
            used.
          </p>
        </div>
        <Cardxl />
        {/* <LabContainer /> */}
        {/* <Carousel /> */}
        {/* <ReactPlayer
          light={<img src="/audio.jpg" alt="Thumbnail" />}
          controls="true"
          url="https://vimeo.com/3155182"
        /> */}
      </div>
      <Footernav />
    </div>
  );
}

export default Lab;
