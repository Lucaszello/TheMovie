import { Box, Grid, Skeleton } from "@mantine/core";
import { useUpcoming } from "../../api";
import { upComingProp } from "../../type/type";
import { lazy, Suspense } from "react";
import Reuse from "../reuseable";
import { useMediaQuery } from "@mantine/hooks";

const UpComingBody = lazy(() => import("./UpComingBody"));

const UpComing = () => {
  const { data, isLoading } = useUpcoming();
  const matches = useMediaQuery("(min-width: 60em)");

  if (isLoading) {
    return;
  }

  return (
    <Box component="div" px={90} mt={10}>
      <Box py={20} component="h2" sx={{ color: "white" }}>
        Upcoming Movie
      </Box>
      {matches ? (
        <Grid columns={5}>
          {data.map((item: upComingProp) => (
            <Grid.Col key={item.id} lg={1}>
              <Suspense
                fallback={
                  <>
                    <Skeleton
                      height={350}
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
                <UpComingBody item={item} />
              </Suspense>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Reuse>
          {data.map((item: upComingProp) => (
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
                <UpComingBody item={item} />
              </Suspense>
            </div>
          ))}
        </Reuse>
      )}
    </Box>
  );
};

export default UpComing;
