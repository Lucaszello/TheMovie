import {
  Box,
  Button,
  Flex,
  PasswordInput,
  TextInput,
  createStyles,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../api/auth";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";
import { GiCheckMark } from "react-icons/gi";
import "react-toastify/dist/ReactToastify.css";
import { registerProp } from "../type/type";
import Logo from "../image/movie.jpg";
import { RxCross2 } from "react-icons/rx";

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
    width: 450,
    backgroundColor: "#000000b8",
    paddingInline: 50,
    paddingBottom: 40,
    paddingTop: 30,
    borderRadius: 10,
  },
  registerLink: {
    color: "red",
    fontSize: 14,
    marginLeft: 3,
  },
  alert: {
    color: "black",
  },
  icon: {
    color: "red ",
  },
}));

const Register = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate: {
      username: (value) => (!value.length ? "username is required" : null),
      password: (value) => (value.length > 4 ? null : "must be greater than 4"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const register = useRegister();

  const navigate = useNavigate();

  const notify = (text: string, icon: boolean) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      icon: (
        <>
          {icon ? (
            <GiCheckMark className={classes.icon} />
          ) : (
            <RxCross2 className={classes.icon} />
          )}
        </>
      ),
      progressClassName: classes.icon,
    });
  };

  const handler = (value: registerProp) => {
    register.mutate(value, {
      onSuccess: (data) => {
        if (data.status === 200) {
          notify("Create account", true);
          return navigate("/login");
        }
      },
      onError: () => {
        notify("Fail account", false);
      },
    });
  };

  return (
    <Box component="div" className={classes.imageBg}>
      <Box component="div" className={classes.bgBlack}>
        <div className={classes.formWidth}>
          <form onSubmit={form.onSubmit((value) => handler(value))} action="">
            <Box component="h1" pb={5} sx={{ color: "#dee1ec" }}>
              Create Account
            </Box>
            <TextInput
              mt={8}
              mb={20}
              placeholder="Username"
              sx={{ ".mantine-TextInput-label": { color: "#f5f5f5" } }}
              size="md"
              {...form.getInputProps("username")}
            />
            <TextInput
              mb={20}
              placeholder="Email"
              sx={{ ".mantine-TextInput-label": { color: "#f5f5f5" } }}
              size="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              sx={{ ".mantine-PasswordInput-label": { color: "#f5f5f5" } }}
              placeholder="Password"
              size="md"
              {...form.getInputProps("password")}
            />
            <Button
              disabled={register.isLoading && true}
              type="submit"
              size="md"
              sx={{
                backgroundColor: "#d72323",
                "&:hover": { backgroundColor: "#d72323" },
                width: "100%",
              }}
              mt={20}
            >
              Register
            </Button>
          </form>
          <Flex justify={"end"} mt={10}>
            <Box sx={{ color: "#dee1ec", fontSize: 14 }}>
              Do you have an account?
            </Box>
            <Link className={classes.registerLink} to={"/login"}>
              Login
            </Link>
          </Flex>
        </div>
      </Box>
    </Box>
  );
};

export default Register;
