import {
  Box,
  Button,
  Flex,
  PasswordInput,
  TextInput,
  createStyles,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Logo from '../image/movie.jpg'

const useStyles = createStyles(() => ({
  imageBg: {
    backgroundImage: `url(${Logo})`,
    height: "100vh",
    width: "full",
    backgroundSize: "cover",
  },
  bgBlack: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00000073",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formWidth: {
    width: 400,
    backgroundColor: "#000000b8",
    paddingInline: 40,
    paddingBottom: 30,
    paddingTop: 20,
    borderRadius: 10,
  },
  registerLink: {
    color: "red",
    fontSize: 14,
    marginLeft: 3,
  },
}));

const Login = () => {
  const { classes } = useStyles();
  return (
    <Box component="div" className={classes.imageBg}>
      <Box component="div" className={classes.bgBlack}>
        <div className={classes.formWidth}>
          <form action="">
            <Box component="h1" pb={5} sx={{ color: "#dee1ec" , textAlign : "center" }}>
              Log in
            </Box>
            <TextInput
              mt={8}
              mb={20}
              placeholder="Email"
              size="md"
              sx={{ ".mantine-TextInput-label": { color: "#f5f5f5" } }}
            />
            <PasswordInput
              size="md"
              sx={{ ".mantine-PasswordInput-label": { color: "#f5f5f5" } }}
              placeholder="Password"
            />
            <Button
              size="md"
              sx={{
                backgroundColor: "#d72323",
                "&:hover": { backgroundColor: "#d72323" },
                width: "100%",
              }}
              mt={20}
            >
              Login
            </Button>
          </form>
          <Flex justify={"end"} mt={10}>
            <Box sx={{ color: "#dee1ec", fontSize: 14 }}>
              if you don't have an account?
            </Box>
            <Link className={classes.registerLink} to={"/register"}>
              create account
            </Link>
          </Flex>
        </div>
      </Box>
    </Box>
  );
};

export default Login;
