import { MantineProvider } from "@mantine/core";

const Main = () => {
  return <MantineProvider withGlobalStyles theme={{
    breakpoints : {
      xs : '30em',
      sm : '48em',
      md : '64em',
      lg : '74em',
      xl : '90em'
    }
  
  }} >Main</MantineProvider>;
};

export default Main;
