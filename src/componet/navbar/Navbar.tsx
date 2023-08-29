import { Box, Container, Input } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {IoSearch} from "react-icons/io5"
const Navbar = () => {
    const matches = useMediaQuery("(max-width: 550px)");
  return (
    <Container py={10} size={"86.5rem"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "#ff00008a",
            fontFamily: "Black Ops One, cursive",
            fontSize: matches ? 20 : 30,
          }}
        >
          WATCHLIX
        </Box>
        <Box>
          <Input
            sx={{
              "& > input": {
                backgroundColor: "#25262b",
                color: "#f5f5f5 ",
                borderColor: "#373a40",
              },
            }}
            rightSection={
              <IoSearch style={{ color: "#f5f5f5", fontSize: 20 }} />
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
