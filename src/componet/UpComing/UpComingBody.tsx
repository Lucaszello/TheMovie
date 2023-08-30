import { Box, createStyles } from "@mantine/core";
import { upComingProp } from "../../type/type"
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

const useStyle = createStyles(() => ({
  UpImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  play: {
    fontSize: 60,
    position: "absolute",
    width: "100%",
    top: 0,
    zIndex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000047",
    color: "#ff00008a",
    opacity : 0
  },
  ImgContainer: {
    position: "relative",
    transition : "0.3s",
    "&:hover .icon" : {
        opacity : 1
    }
  },
}));

const UpComingBody = ({item} : {item : upComingProp}) => {
  console.log(item.poster_path);
  
    const {classes} = useStyle()
  return (
    <Link to={`/movie/${item.id}`}>
      <Box className={classes.ImgContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
          alt={item.title}
          className={classes.UpImg}
        />
        <Box className={`${classes.play} icon`} component="span">
          <AiFillPlayCircle />
        </Box>
      </Box>
    </Link>
  );
}

export default UpComingBody