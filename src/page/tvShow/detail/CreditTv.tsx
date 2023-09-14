import { useCreditsTv } from "../../../api"
import { CastProp } from "../../../type/type";
import { Box, Skeleton } from "@mantine/core";
import { BsArrowRight } from "react-icons/bs";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Reuse from "../../../componet/reuseable";
import { useMediaQuery } from "@mantine/hooks";
const CreditTvBody = lazy(() => import("./CreditTvBody") )

const CreditTv = ({id} : {id : number}) => {
    const {data,isLoading} = useCreditsTv(id)

      const matches = useMediaQuery("(max-width: 720px)");

    
    if(isLoading){
        return <h1>isLoading...</h1>        
    }
    const fix = data?.cast?.filter((item: CastProp) => item?.profile_path);


  return (
    <Box component="div" px={matches ? 30 : 90} mt={20}>
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
      {fix.length ? (
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
                    <CreditTvBody item={item} />
                  </Suspense>
                </Box>
              )}
            </Box>
          ))}
        </Reuse>
      ) : (
        <Box
          component="h3"
          sx={{
            textDecorationLine: "line-through",
            color: "white",
            opacity: 0.5,
          }}
        >
          Thi Cast is not available now
        </Box>
      )}
      {/* // more people  */}
      <Link style={{ textDecoration: "none" }} to={`/people`}>
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
      </Link>
    </Box>
  );
}

export default CreditTv