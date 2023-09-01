import { Box, Container, Skeleton } from "@mantine/core";
import { useCredits } from "../../api";
import { CastProp } from "../../type/type";
import Reuse from "../reuseable";
import { BsArrowRight } from "react-icons/bs";
import { lazy, Suspense } from "react";
const CredistBody = lazy(() => import("./CredistBody"));

const Credits = ({ id }: { id: number }) => {
  const { data, isLoading } = useCredits(id);
  if (isLoading) {
    return null;
  }
  return (
    <Container size={"86.5rem"} mt={20}>
      <Box
        sx={{
          color: "white",
          textDecorationStyle: "double",
          textDecorationLine: "underline",
        }}
        py={10}
        mb={20}
        component="h2"
      >
        Top Billed Cast
      </Box>
      {/* //reuse kenn slider */}
      <Reuse key={data.cast[0].id}>
        {data?.cast?.map((item: CastProp) => (
          <Box key={item.id}>
            {item.profile_path && (
              <Box key={item.id} className="keen-slider__slide number-slide1">
                <Suspense
                  fallback={
                    <Skeleton
                      width={150}
                      height={150}
                      sx={{
                        "&::after": {
                          backgroundColor: "#000000db",
                        },
                        borderRadius: "50%",
                      }}
                    />
                  }
                >
                  <CredistBody item={item} />
                </Suspense>
              </Box>
            )}
          </Box>
        ))}
      </Reuse>
      {/* // more people  */}
      <Box
        my={20}
        component="p"
        sx={{
          color: "white",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        More Popular{" "}
        <Box
          component="span"
          sx={{
            color: "#ff00008a",
            marginLeft: 8,
            display: "flex",
            alignItems: "center",
          }}
        >
          People{" "}
          <BsArrowRight size={25} style={{ paddingTop: 3, marginLeft: 5 }} />
        </Box>{" "}
      </Box>
    </Container>
  );
};

export default Credits;
