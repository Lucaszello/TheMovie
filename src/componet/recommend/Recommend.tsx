import { Box, Container, Skeleton } from "@mantine/core";
import { useRecommend } from "../../api";
import { RecommendProp } from "../../type/type";
import Reuse from "../reuseable";
import { lazy, Suspense } from "react";
const RecommendBody = lazy(() => import("./RecommendBody"));
const Recommend = ({ id }: { id: number }) => {
  const { data, isLoading } = useRecommend(id);
  // const filter = data ;

  if (isLoading) {
    return null;
  }

  const fix = data.find((item : RecommendProp) => item.backdrop_path !== null);
  console.log(fix);
  
  return (
    <Container size={"86.5rem"}>
      <Box component="div">
        <Box
          component="h2"
          mb={15}
          sx={{
            color: "white",
            textDecorationStyle: "double",
            textDecorationLine: "underline",
          }}
        >
          Recommendations
        </Box>

        {data.length && fix ? (
          <Reuse key={data[0].id}>
            {data?.map((item: RecommendProp) => (
              <Box key={item.id}>
                {item.backdrop_path && (
                  <div
                    key={item.id}
                    className="keen-slider__slide number-slide1"
                  >
                    <Suspense
                      fallback={
                        <>
                          <Skeleton
                            height={150}
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
                      <RecommendBody item={item} />
                    </Suspense>
                  </div>
                )}
              </Box>
            ))}
          </Reuse>
        ) : (
          <Box
            component="p"
            sx={{ color: "white", textDecorationLine: "line-through" }}
          >
            Not recommended yet
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Recommend;
