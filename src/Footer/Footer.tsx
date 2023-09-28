import { Box, Grid, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "../api/nav";
import ContactForm from "./ContactForm";

const useStyle = createStyles((theme) => ({
  Logo: {
    color: "#ff00008a",
    fontFamily: "Black Ops One, cursive",
    fontSize: 35,
    textDecoration: "none",
    [theme.fn.smallerThan("md")]: {
      fontSize: 25,
    },
  },
  navLink : {
    textDecoration : "none",
    fontSize : 16,
    color : "white",
    opacity : 0.8,
    fontWeight : 500
  },
  active : {
    color : "red",
    fontSize : 16,

  }
}));

const Footer = () => {
  const { classes , cx } = useStyle();
  const matches = useMediaQuery("(max-width: 720px)");
  const {pathname}  = useLocation()
  
    
  return (
    <Box
      pt={25}
      pb={25}
      mt={35}
      px={matches ? 30 : 90}
      sx={{ color: "white", backgroundColor: "black" }}
    >
      <Grid  justify="space-between" columns={12}>
        <Grid.Col  md={4}>
          <Link to={`/`} className={classes.Logo}>
            WATCHLIX
          </Link>
          <Box component="p" sx={{ opacity: 0.9 , textJustify : "auto" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            tempore nesciunt, eos veniam tempora sunt eius iste officiis beatae
            cumque iure quis aliquid distinctio ut a quidem delectus
            exercitationem iusto!
          </Box>
        </Grid.Col>
        <Grid.Col md={1}>
          <Box component="h2" sx={{color : "white"}}  >Page</Box>
          <Box component="ul" >
           {
            Nav.map(item =>{
              const isActive = pathname === item.path
              
              return  <Box key={item.name} sx={{listStyle : "none" , marginTop : 10 }} component="li" >
              <Link className={cx(classes.navLink , {[classes.active] : isActive } )} to={item.path} >
                {item.name }
              </Link>
            </Box>} )
           }
          </Box>
        </Grid.Col>
           {/* form contact   */}

          <Grid.Col  md={4}>
            <Box component="h2">Contact us</Box>
            <ContactForm />
          </Grid.Col>
      </Grid>

     
    </Box>
  );
};

export default Footer;
