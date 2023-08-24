import { createStyles, Box, rem, Text, MediaQuery } from "@mantine/core";
import { heroSection } from "../../type/type";
import { AiFillPlayCircle } from "react-icons/ai";
import Recommend from "./Recommend";
import { useMediaQuery } from "@mantine/hooks";
const useStyle = createStyles((theme) => ({
  heroImg: {
    height: 740,
    width: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    [theme.fn.smallerThan("md")]: {
      height: 300,
    },
  },
  imgContainer: {
    position: "absolute",
    left: 0,
    paddingLeft: rem(90),
    zIndex: 100,
    height: "100%",
    bottom: 0,
    backgroundImage:
      "linear-gradient(to right, #000000e8, #121111cf, #1d1d1ca8, #2827274f, #33323212)",
    width: "100%",
    textJustify: "auto",
    paddingBottom: rem(50),
    [theme.fn.smallerThan("md")]: {
      padding: rem(30),
    },
  },
  herobtn: {
    outline: "none",
    border: "none",
    fontSize: rem(100),
    color: "#ff00008a",
    cursor: "pointer",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(60),
    },
  },
  title: {
    fontSize: rem(40),
    color: "white",
    marginTop: 450,
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(20),
      marginTop: 150,
    },
      // [theme.fn.smallerThan("lg")]: {
      //   height: 300,
      // },
  },
}));

const HeroSectionCarousel = ({ item }: { item: heroSection }) => {
    const matches = useMediaQuery("(max-width: 40em)");
  const { classes } = useStyle();

  return (
    <>
      <Box component="div" sx={{ position: "relative", height: "100%" }}>
        <img
          src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
          alt=""
          className={classes.heroImg}
        />
        <Box className={classes.imgContainer}>
          <Box h={"100%"} w={ matches ? "100%" : "50%"}>
            <Box
 
              component="h1"
              className={classes.title}
            >
              {item.title}
            </Box>
            <Box
              sx={{ color: "#D8D9DA", display: "flex", alignItems: "end" }}
              component="p"
            >
              popularity :
              <Box component="span" sx={{ color: "#C51605", marginLeft: 5 }}>
                {item.popularity}
              </Box>
            </Box>
            <Box
              sx={{ color: "#D8D9DA", display: "flex", alignItems: "end" }}
              component="p"
            >
              release-date :
              <Box
                component="span"
                mt={5}
                sx={{ color: "#C51605", marginLeft: 5 }}
              >
                {item.release_date}
              </Box>
            </Box>

            <MediaQuery smallerThan={"md"} styles={{display : "none"}}>
              <Box py={10} component="div">
                <Text
                  mb={5}
                  sx={{ textDecoration: "underline" }}
                  size={20}
                  color="#D8D9DA"
                >
                  Recommend movie
                </Text>
                <Recommend id={item.id} />
              </Box>
            </MediaQuery>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translate(50%,-50%)",
              right: "50%",
            }}
          >
            <button className={classes.herobtn}>
              <AiFillPlayCircle />
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSectionCarousel;
