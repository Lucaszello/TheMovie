import { Box } from "@mantine/core";
import { RecommendProp } from "../../type/type";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecommendBody = (item: { item: RecommendProp }) => {
  
  return (
    <Link style={{ textDecoration: "none" }} to={`/movie/${item.item.id}`}>
      <Box
        sx={{
          position: "relative",
          cursor: "pointer",
          "&:hover .span": { opacity: 1 },
        }}
        component="div"
      >
        <img
          height={"100%"}
          width={"100%"}
          src={`http://image.tmdb.org/t/p/w500/${item.item.backdrop_path}`}
          alt=""
        />
        <Box
          component="div"
          className="span"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#00000082",
            opacity: 0,
            transition: "0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ff00008a",
            fontSize: 30,
            top: 0,
          }}
        >
          <AiFillPlayCircle />
        </Box>
      </Box>
      <Box sx={{ color: "white", textAlign: "center" }}>{item.item.title}</Box>
    </Link>
  );
};

export default RecommendBody;
