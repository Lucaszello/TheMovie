import { Box, Container, Input, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {IoSearch} from "react-icons/io5"
import { Link } from "react-router-dom";

const useStyle = createStyles(() => ({
  Logo: {
    color: "#ff00008a",
    fontFamily: "Black Ops One, cursive",
    fontSize: 30,
    textDecoration : "none"
  },
}));

const Navbar = () => {
  const {classes} = useStyle()
    const matches = useMediaQuery("(max-width: 550px)");
  return (
    <Container sx={{display : matches ? "none" : ""}} py ={15} size={"86.5rem"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
         to={`/`}
         className={classes.Logo}
        >
          WATCHLIX
        </Link>
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
