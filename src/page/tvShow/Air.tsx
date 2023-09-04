import { Box, Skeleton } from "@mantine/core";
import Reuse from "../../componet/reuseable";
import { useAir } from "../../api";
import { tv } from "../../type/type";
import { lazy, Suspense } from "react";
const TvBody = lazy(() => import("./TvBody"));
const Air = () => {
  const { data, isLoading } = useAir();

  if(isLoading){
    return null;
  }

  return (
    <>
      <Box
        component="h2"
        my={20}
        sx={{
          color: "white",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
        }}
      >
        Airing Today
      </Box>
      <Reuse>
        {data?.map((item: tv) => (
          <Box key={item.id} className="keen-slider__slide number-slide1">
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
              <TvBody item={item} />
            </Suspense>
          </Box>
        ))}
      </Reuse>
    </>
  );
};

export default Air;
