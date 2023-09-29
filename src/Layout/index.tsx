import { MantineProvider } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../componet/navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import HeroLoader from "../Loader/heroLoader";
const Main = () => {
  const [loading, setLoading] = useState(true);

  const reget: string | null = localStorage.getItem("token");

  const token = reget && JSON.parse(reget);

  useEffect(() => {
    if (!token) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <HeroLoader />;
  }

  if (!token) {
    return  <Navigate to={"/login"} />;
  }
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
      <Navbar />
      <Outlet />
      <Footer />
    </MantineProvider>
  );
};

export default Main;
