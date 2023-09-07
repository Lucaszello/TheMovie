import { Box, Skeleton } from "@mantine/core";
import { usePopular } from "../../api";
import { heroSection } from "../../type/type";
import { lazy, Suspense } from "react";
import Reuse from "../reuseable";
import { useMediaQuery } from "@mantine/hooks";
const Comingbody = lazy(() => import("./PopularBody"));

const Popular = () => {
  const { data, isError, isLoading } = usePopular();
  const matches = useMediaQuery("(max-width: 800px)");


  if (isLoading) {
    return;
  }

  if (isError) {
    return <h1>isError...</h1>;
  }
  return (
    <Box px={ matches ? 30 : 90} my={25} component="section">
      <>
        <Box component="h2" mb={20} sx={{ color: "white" }}>
          Popular Movie
        </Box>
        <Box
          sx={{ position: "relative" }}
          h={240}
          className="navigation-wrapper"
        >
          <Reuse>
            {data.map((item: heroSection) => (
              <div key={item.id} className="keen-slider__slide number-slide1">
                <Suspense
                  fallback={
                    <>
                      <Skeleton
                        height={250}
                        width={"100%"}
                        sx={{
                          "&::after": {
                            backgroundColor: "#000000db",
                          },
                        }}
                      />
                    </>
                  }
                >
                  <Comingbody item={item} />
                </Suspense>
              </div>
            ))}
          </Reuse>
        </Box>
      </>
    </Box>
  );
};

export default Popular;
