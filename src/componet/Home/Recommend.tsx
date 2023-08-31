import { Box } from "@mantine/core";
import { useTopRate } from "../../api";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Recommend = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useTopRate(id);

  if (isLoading) {
    return <Box sx={{ color: "white" }}>Loading...</Box>;
  }

  if (isError) {
    return <Box sx={{ color: "white" }}>Error...</Box>;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
      {data.map((item: any) => (
        <Link key={item.id} to={`movie/${item.id}`}>
          <Box
            component="div" 
            sx={{
              position: "relative",
              cursor: "pointer",
              "&:hover .span": { opacity: 1 },
            }}
          >
            <Box
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
              }}
            >
              <AiFillPlayCircle />
            </Box>
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
              alt=""
              width={200}
              height={100}
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Recommend;
