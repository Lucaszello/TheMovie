import { Box, createStyles } from "@mantine/core";
import {  useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const usestyle = createStyles(() => ({
  arrow: {
    color: "white",
    top: "50%",
    position: "absolute",
    transform: "translate(0 , -50%)",
    fontSize: 25,
    backgroundColor: "black",
    borderRadius: "50%",
    cursor: "pointer",
    scale: 1,
    transition: "0.5s",
    "&:active": {
      scale: 0.9,
    },
  },
  rightArrow: {
    color: "white",
    top: "50%",
    position: "absolute",
    transform: "translate(0 , -50%)",
    fontSize: 25,
    backgroundColor: "black",
    borderRadius: "50%",
    cursor: "pointer",
    scale: 1,
    right: 0,
  },
}));



const Reuse = ({children} : any) => {
    const {classes} = usestyle()
  //keen
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);


  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(max-width : 450px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width : 451px )": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width : 600px )": {
        slides: { perView: 4, spacing: 13 },
      },
      "(min-width :900px )": {
        slides: { perView: 5, spacing: 15 },
      },
      "(min-width : 1300px )": {
        slides: { perView: 7, spacing: 20 },
      },
      "(min-width : 1600px )": {
        slides: { perView: 10, spacing: 25 },
      },
    },
  });

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "relative",
          "&:before": { content: "''", position: "absolute", right: 0 },
        }}
        ref={sliderRef}
        className="keen-slider"
      >
        {children}
      </Box>
      {loaded && instanceRef.current && (
        <>
          <FaChevronCircleLeft
            className={classes.arrow}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <FaChevronCircleRight
            className={classes.rightArrow}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </Box>
  );
}

export default Reuse