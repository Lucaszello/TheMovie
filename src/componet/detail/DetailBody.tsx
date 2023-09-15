import {
  Box,
  Flex,
  Grid,
  Rating,
  Text,
  createStyles,
} from "@mantine/core";
import { detailProp } from "../../type/type";
import { FaPlay } from "react-icons/fa";
import Video from "./Video";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Credits from "./Credits";
import Recommend from "../recommend/Recommend";
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

const DetailBody = ({ item }: { item: detailProp }) => {
  const matches = useMediaQuery("(max-width: 720px)");
  const matches2 = useMediaQuery("(max-width: 56.25em)");
  const { classes } = useStyle();
  const [open, setOpen] = useState(false);
  
  return (
    <>
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
                component="h1"
              >
                {item.title}
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

              <Text color="white" fw={600} mt={4}>
                Budget :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.budget}
                </Box>
              </Text>

              <Text color="white" fw={600} mt={4}>
                Release-date :
                <Box
                  component="span"
                  ml={10}
                  sx={{ color: "#efececd6", fontWeight: 400 }}
                >
                  {item.release_date}
                </Box>
              </Text>

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

              {/* rating */}
              <Box sx={{ display: "flex", alignItems: "center" }} mt={4}>
                <Box component="p" mr={5} fz={18}>
                  Rating :
                </Box>
                <Rating defaultValue={2} />
              </Box>

              {/* Watch Movie */}
              <Box onClick={() => setOpen(true)} className={classes.LinkBtn}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
      {open && <Video id={item.id} setOpen={setOpen} />}

      {/* //Credits  */}
      <Credits id={item.id} />

      {/* Recommend */}
      <Recommend id={item.id} />
    </>
  );
};

export default DetailBody;
