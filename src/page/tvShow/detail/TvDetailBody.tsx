import { Box, Flex, Grid, Text, createStyles } from "@mantine/core";
import {  tvDetailProp } from "../../../type/type";
import { useMediaQuery } from "@mantine/hooks";
import { FaPlay } from "react-icons/fa";
import { useState , lazy , Suspense } from "react";
import HeroLoader from "../../../Loader/heroLoader";
import CreditTv from "./CreditTv";
const Video = lazy(() => import("../../../componet/detail/Video"))
const useStyle = createStyles((theme) => ({
  posterImg: {
    width: 280,
    height: 400,
    objectFit: "cover",
    borderRadius: 10,
    [theme.fn.smallerThan("md")]: {
      backgroundSize: "contain",
      width: 200,
      height: "100%",
    },
  },
  logoPath: {
    width: "100%",
    backgroundColor: "white",
    height: 50,
    objectFit: "contain",
  },
  LinkBtn: {
    fontSize: 25,
    textDecoration: "none",
    color: "red",
    marginTop: 10,
    cursor: "pointer",
  },
}));

const TvDetailBody = ({ item }: { item: tvDetailProp }) => {
  const { classes } = useStyle();
  const matches = useMediaQuery("(max-width: 56.25em)");
  const matches2 = useMediaQuery("(max-width: 720px)");

  const [open, setOpen] = useState(false);

  

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(http://image.tmdb.org/t/p/w500/${item?.backdrop_path})`,
          width: "100%",
          color: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 10,
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#000000bd",
            zIndex: -1,
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <Box px={matches2 ? 30 : 90}>
          <Grid align="center" pt={30} pb={15} columns={12}>
            <Grid.Col lg={3}>
              <img
                src={`http://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                className={classes.posterImg}
                alt=""
              />
            </Grid.Col>
            <Grid.Col lg={9}>
              <Box
                sx={{
                  textAlign: matches ? "center" : "start",
                  marginBottom: matches ? 10 : 0,
                }}
                component="h2"
              >
                {item.name}
              </Box>

              <Flex>
                <Box
                  component="p"
                  sx={{
                    marginRight: 5,
                    color: "#efececd6",
                    textDecoration: "underline double",
                    fontSize: 14,
                  }}
                >
                  {item.genres[0]?.name},
                </Box>
                <Box
                  component="p"
                  sx={{
                    marginRight: 5,
                    color: "#efececd6",
                    textDecoration: "underline double",
                    fontSize: 14,
                  }}
                >
                  {item.genres[1]?.name},
                </Box>
                <Box
                  component="p"
                  sx={{
                    marginRight: 5,
                    color: "#efececd6",
                    textDecoration: "underline double",
                    fontSize: 14,
                  }}
                >
                  {item.genres[2]?.name}
                </Box>
              </Flex>

              <Box my={15} component="div">
                <Box component="h3">Overview : </Box>
                <Box sx={{ color: "#efececd6", fontSize: 15 }} component="p">
                  {item.overview}
                </Box>
              </Box>

              {/* popularity */}
              <Text color="white" fw={600} mt={4}>
                Popularity :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.popularity}
                </Box>
              </Text>

              {/* total season */}
              <Text color="white" fw={600} mt={4}>
                Total Seasons :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.number_of_seasons}
                </Box>
              </Text>

              {/* episodes */}
              <Text color="white" fw={600} mt={4}>
                Total Episodes :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.number_of_episodes}
                </Box>
              </Text>

              {/* original language */}
              <Text color="white" fw={600} mt={4}>
                Original Language :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  &#884;{item.original_language}&#900;
                </Box>
              </Text>

              {/* status */}
              <Text color="white" fw={600} mt={4}>
                Status :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.status}
                </Box>
              </Text>

              {/* Link home Link */}
              <Text color="white" fw={600} mt={4}>
                Original Link :
                <Box
                  component="a"
                  target="_blink"
                  href={item.homepage}
                  ml={10}
                  sx={{
                    color: "red",
                    fontWeight: 400,
                    cursor: "pointer",
                    opacity: 0.95,
                    textDecoration: "none",
                  }}
                >
                  click here
                </Box>
              </Text>

              {/* watch  */}
              <Box className={classes.LinkBtn}>
                <Box
                  onClick={() => setOpen(true)}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Watch Now{" "}
                  <Box sx={{ fontSize: 14, paddingLeft: 5, paddingTop: 6 }}>
                    <FaPlay />
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>

      {open && (
        <Suspense fallback={<HeroLoader />}>
          <Video id={item.id} setOpen={setOpen} />
        </Suspense>
      )}

      <CreditTv id={item.id} />
    </div>
  );
};

export default TvDetailBody;
