import { Box } from "@mantine/core";
import { useVideo } from "../../api";
import ReactPlayer from "react-player";
import {Dispatch , SetStateAction} from "react"

interface prop {
  id: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Video = ({ id  , setOpen }: prop) => {
  const { data, isLoading } = useVideo(id);

  if (isLoading) {
    return ;
  }

  const vd = data[data?.length - 1];
  console.log(vd);

  return (
    <Box
      onClick={() => setOpen(false)}
      pb={10}
      sx={{
        color: "white",
        position: "fixed",
        zIndex: 100,
        top: 0,
        left: 0,
        // right : 0,
        // bottom : 0,
        width: "100%",
        height: "100%",
        background: "#0000007d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter : "blur(7px)"
      }}
    >
      <ReactPlayer
      playing
      width={900}
      height={500}
        url={`https://youtube.com/watch?v=${vd.key}`}
        fallback={<Box sx={{ color: "white" }}>is Loading...</Box>}
      />
    </Box>
  );
};

export default Video;
