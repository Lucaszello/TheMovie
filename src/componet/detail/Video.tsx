import { Box, Loader } from "@mantine/core";
import { useVideo } from "../../api";
import ReactPlayer from "react-player";
import { Dispatch, SetStateAction } from "react";

interface prop {
  id: number;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Video = ({ id, setOpen }: prop) => {
  const { data, isLoading } = useVideo(id);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          width : "100%",
          height : "100%"
        }}
      >
        <Loader />
      </Box>
    );
  }

  const vd = data[data?.length - 1];
  console.log(vd);

  return (
    <>
      {data.length && vd.key ? (
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
            backdropFilter: "blur(7px)",
          }}
        >
          {
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transfrom: "translateX(-50%)",
              }}
            >
             <Loader color="red" />
            </Box>
          }
          <ReactPlayer
            playing
            width={900}
            height={500}
            style={{ zIndex: 9 }}
            url={`https://youtube.com/watch?v=${vd?.key}`}
            fallback={
              <Box
                sx={{
                  color: "white",
                  background: "white",
                  height: "100vh",
                  width: "100%",
                  zIndex: 9999,
                }}
              >
                is Loading...
              </Box>
            }
          />
        </Box>
      ) : (
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
            backdropFilter: "blur(7px)",
          }}
        >
          <Box component="h2" sx={{ color: "white" }}>
            Sorry, This Video is not available now
          </Box>
        </Box>
      )}
    </>
  );
};

export default Video;
