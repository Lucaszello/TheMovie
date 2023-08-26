import { MantineProvider } from "@mantine/core";
import { Outlet } from "react-router-dom";



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
      <Outlet/>
    </MantineProvider>
  );
};

export default Main;
