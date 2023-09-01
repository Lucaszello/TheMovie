import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "../componet/navbar/Navbar";
import Footer from "../Footer/Footer";



const Main = ( ) =>  {
  return (
    <MantineProvider
      withGlobalStyles
      theme={{
        breakpoints: {
          xs: "30em",
          sm: "48em",
          md: "64em",
          lg: "74em",
          xl: "90em",
        },
      }}
      
    >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </MantineProvider>
  );
};

export default Main;
