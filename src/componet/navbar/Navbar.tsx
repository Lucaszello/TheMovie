import { Box, Container, createStyles } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "../../api/nav";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { Burger } from "@mantine/core";;
import SearchBox from "./SearchBox";
const useStyle = createStyles((theme) => ({
  Logo: {
    color: "#ff00008a",
    fontFamily: "Black Ops One, cursive",
    fontSize: 30,
    textDecoration: "none",
    [theme.fn.smallerThan("md")] : {
      fontSize : 20
    }
  },
  navUl: {
    display: "flex",
    alignItems: "center",
  },
  navli: {
    paddingInline: 8,
    marginInline: 8,
    listStyle: "none",
    position: "relative",
  },
  navLink: {
    textDecoration: "none",
    color: "#D8D9DA",
    fontSize: 18,
  },
  under: {
    position: "absolute",
    left: 0,
    backgroundColor: "#ff00008a",
    width: "100%",
    height: 2,
    bottom: -5,
  },
}));

const Navbar = () => {
  const { classes } = useStyle();
  const matches = useMediaQuery("(max-width: 620px)");
  const { pathname } = useLocation();
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? "Close navigation" : "Open navigation";

  

    //placeholder
    const placeholder   = pathname === "/" ? "movie" : pathname.split("/")[1] ;
    
    
   

  return (
    <Container py={15} size={"86.5rem"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/`} className={classes.Logo}>
          WATCHLIX
        </Link>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ display: matches ? "none" : "" }}
            className={classes.navUl}
            component="ul"
          >
            {Nav.map((item, index) => {
              const isActive = item.path === pathname;
              return (
                <li className={classes.navli} key={index}>
                  <Link className={classes.navLink} to={item.path}>
                    {item.name}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="navbar"
                      aria-hidden="true"
                      transition={{
                        type: "tween",
                        duration: 0.3,
                      }}
                      className={classes.under}
                    ></motion.span>
                  )}
                </li>
              );
            })}
          </Box>
          {/* // search */}
        <SearchBox placeholder={placeholder} />
          {matches && (
            <Burger
              ml={10}
              color="white"
              opened={opened}
              onClick={toggle}
              aria-label={label}
            />
          )}
        </Box>
      </Box>
      {matches && (
        <Box
          sx={{
            position: "fixed",
            bottom: "0px",
            width: "90%",
            left: "50%",
            zIndex: 100,
            transform: "translate(-50%,0)",
          }}
        >
          <MobileNav opened={opened} toggle={toggle} />
        </Box>
      )}
    </Container>
  );
};

export default Navbar;
