import { Box, Container, Skeleton, createStyles } from "@mantine/core";
import { usePopular } from "../../api";
import { heroSection } from "../../type/type";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState , lazy , Suspense } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
const Comingbody = lazy(() => import("./PopularBody"))

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

const Popular = () => {
  const { data, isError, isLoading } = usePopular();
  const { classes } = usestyle();

  //keen
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const test = currentSlide === 0
  

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
      "(min-width :620px )": {
        slides: { perView: 5, spacing: 15 },
      },
      "(min-width : 1070px )": {
        slides: { perView: 7, spacing: 20},
      },
    },
  });

  if (isLoading) {
    return  
  }

  if (isError) {
    return <h1>isError...</h1>;
  }
  return (
    <Box my={25} component="section">
      <Container size={"86.5rem"}>
        <Box component="h2" mb={20} sx={{ color: "white" }}>
          Popular Movie
        </Box>
        <Box
          sx={{ position: "relative" }}
          h={240}
          className="navigation-wrapper"
        >
          <Box
            sx={{
              position: "relative",
              "&:before": { content: "''", position: "absolute", right: 0 },
            }}
            ref={sliderRef}
            className="keen-slider"
          >
            {data.map((item: heroSection) => (
              <div key={item.id} className="keen-slider__slide number-slide1">
                <Suspense
                  fallback={
                    <>
                      <Skeleton
                        height={250}
                        width={"100%"}
                        sx={{
                          "&::after": {
                            backgroundColor: "#000000db",
                          },

                        }}
                      />
                    </>
                  }
                >
                  <Comingbody item={item} />
                </Suspense>
              </div>
            ))}
            {test && (
              <Box
                sx={{
                  backgroundColor: "#000000b3",
                  color: "white",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: 260 ,
                  width: 20,
                }}
                component="span"
              ></Box>
            )}
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
      </Container>
    </Box>
  );
};

export default Popular;
