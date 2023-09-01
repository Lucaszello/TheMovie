import { Box, Container } from "@mantine/core";
import { useRecommend } from "../../api";
import { RecommendProp } from "../../type/type";
import RecommendBody from "./RecommendBody";
import Reuse from "../reuseable";

const Recommend = ({ id }: { id: number }) => {
  const { data, isLoading } = useRecommend(id);

  // const filter = data ;

  if (isLoading) {
    return;
  }
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

        {data.length ? (
          <Reuse>
            {data?.map((item: RecommendProp) => (
              <>
                {item.backdrop_path && (
                  <div
                    key={item.id}
                    className="keen-slider__slide number-slide1"
                  >
                    <RecommendBody item={item} />
                  </div>
                )}
              </>
            ))}
          </Reuse>
        ) : (
          <Box component="p" sx={{ color: "white" , textDecorationLine : "line-through" }}>Not recommended yet</Box>
        )}
      </Box>
    </Container>
  );
};

export default Recommend;
