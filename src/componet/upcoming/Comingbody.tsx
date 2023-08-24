import { Box, RingProgress, Text, createStyles } from "@mantine/core";
import { heroSection } from "../../type/type";
import { AiFillPlayCircle } from "react-icons/ai";

const useStyle = createStyles(() => ({
  container: {
    position: "relative",
    transition: "0.5s  all",
    "&:hover .poBtn": {
      opacity: 1,
    },
  },
  backImg: {
    width: "100%",
    // height : 0,
    objectFit: "contain",
    objectPosition: "center",
    borderRadius: 10,
    transition: "0.5s",
    "&:hover": {},
  },
  btn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 40,
    color: "#ff00008a",
  },
  btnContainer: {
    position: "absolute",
    top: "50%",
    transform: "translate(50%,-55%)",
    right: "50%",
    backgroundColor: "#00000069",
    width: "100%",
    height: "110%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity : 0
  },
}));

const Comingbody = ({ item }: { item: heroSection }) => {
  const { classes } = useStyle();
  return (
    <Box className={classes.container}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
        alt=""
        className={classes.backImg}
      />
      <Box className={`${classes.btnContainer} poBtn`}>
        <button className={classes.btn}>
          <AiFillPlayCircle />
        </button>
      </Box>
      <Box component="span">
        <RingProgress
          sx={{ top: "-50px", backgroundColor: "black", borderRadius: "50%" }}
          thickness={3}
          size={60}
          label={
            <Text color="#C51605" weight={500} align="center" size="sm">
              {item.vote_average}%
            </Text>
          }
          sections={[{ value: item.vote_average, color: "#C51605" }]}
        />
      </Box>
    </Box>
  );
};

export default Comingbody;
