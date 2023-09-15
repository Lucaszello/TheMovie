import { Box, RingProgress, Text, createStyles } from "@mantine/core";
import { heroSection } from "../../type/type";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const useStyle = createStyles(() => ({
  container: {
    position: "relative",
    transition: "0.5s  all",
    height : 260,
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
    top: 0,
    backgroundColor: "#00000069",
    width: "100%",
    height: 260,
    opacity : 0,
    overflow : "hidden",
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
  },
}));

const Comingbody = ({ item }: { item: heroSection }) => {
  const { classes } = useStyle();
  return (
    <Box className={classes.container}>
      <img
        src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt=""
        className={classes.backImg}
      />
      <Box className={`${classes.btnContainer} poBtn`}>
        <Link to={`/movie/${item.id}`} className={classes.btn}>
          <AiFillPlayCircle />
        </Link>
      </Box>
      <Box component="span">
        <RingProgress
          sx={{ top: "-71px", backgroundColor: "black", borderRadius: "50%" }}
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
