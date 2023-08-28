import {  usefetchHero } from "../../api"
import HeroSectionCarousel from "./HeroSectionCarousel";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { heroSection } from "../../type/type";
import HeroLoader from "../../Loader/heroLoader";

const HeroSection = () => {
    const {data,isLoading,isError} = usefetchHero()

    //ken
     const [sliderRef] = useKeenSlider<HTMLDivElement>(
       {
         loop: true,
       },
       [
         (slider) => {
           let timeout: ReturnType<typeof setTimeout>;
           let mouseOver = false;
           function clearNextTimeout() {
             clearTimeout(timeout);
           }
           function nextTimeout() {
             clearTimeout(timeout);
             if (mouseOver) return;
             timeout = setTimeout(() => {
               slider.next();
             }, 3000);
           }
           slider.on("created", () => {
             slider.container.addEventListener("mouseover", () => {
               mouseOver = true;
               clearNextTimeout();
             });
             slider.container.addEventListener("mouseout", () => {
               mouseOver = false;
               nextTimeout();
             });
             nextTimeout();
           });
           slider.on("dragStarted", clearNextTimeout);
           slider.on("animationEnded", nextTimeout);
           slider.on("updated", nextTimeout);
         },
       ]
     );


     //loading
    if(isLoading){
        return <HeroLoader/>
    }

    //isError
    if(isError){
        return <h1>Error...</h1>
    }
    
  return (
    <section>
      <div style={{ width: "100%" }} ref={sliderRef} className="keen-slider">
        {data?.map((item : heroSection) => (
          <div key={item.id} className="keen-slider__slide number-slide1">
            <HeroSectionCarousel item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection