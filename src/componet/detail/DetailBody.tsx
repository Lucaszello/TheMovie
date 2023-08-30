import {
  Box,
  Container,
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
    color: "#ff00008a",
    marginTop: 10,
    cursor: "pointer",
  },
}));

const DetailBody = ({ item }: { item: detailProp }) => {
  const matches = useMediaQuery("(max-width: 56.25em)");
  const { classes } = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`,
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
        <Container size={"86.5rem"}>
          <Grid align="center" pt={30} pb={15} columns={12}>
            <Grid.Col lg={3}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                className={classes.posterImg}
                alt=""
              />
            </Grid.Col>
            <Grid.Col lg={9}>
              <Box
                sx={{ textAlign: matches ? "center" : "start" , marginBottom : matches ? 10 : 0}}
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

              {/* /company name/ */}
              {/* <Box mt={8} component="div">
              <h3>Company Name</h3>
              <Grid pt={10} columns={4}>
                {item.production_companies.map((item) => item.logo_path !== null ?  
                  <Grid.Col sx={{ color: "#efececd6" }} span={1}>
                    <img
                      className={classes.logoPath}
                      src={`https://image.tmdb.org/t/p/original/${item?.logo_path}`}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </Grid.Col>
                  : 
                  <></>
                )}
              </Grid>
            </Box> */}
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      {open && <Video id={item.id} setOpen={setOpen} />}
    </>
  );
};

export default DetailBody;
