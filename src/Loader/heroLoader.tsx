import { Box } from "@mantine/core";
import { Loader } from "@mantine/core";
const HeroLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width : "100%",
        top : 0
      }}
    >
      <Loader color="red"/>
    </Box>
  );
};

export default HeroLoader;
