import { Box, Container, Grid, Skeleton, createStyles } from "@mantine/core";
import { useUpcoming } from "../../api";
import { upComingProp } from "../../type/type";
import { Suspense, lazy } from "react";
const UpComingBody = lazy(() => import("./UpComingBody"))

const useStyle = createStyles((theme) => ({
  res : {
    [theme.fn.smallerThan("md")] : {
      display : "none"
    }
  }
}) )


const UpComing = () => {
  const {classes} = useStyle();
  const { data, isLoading } = useUpcoming();

  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  console.log(data);

  return (
    <Container
      mt={10}
      size={"86.5rem"}
      className={classes.res}
    >
      <Box pb={20} component="h2" sx={{ color: "white" }}>
        Upcoming Movie
      </Box>
      <Grid columns={5}>
        {data.map((item: upComingProp) => (
          <Grid.Col lg={1}>
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
    </Container>
  );
};

export default UpComing;
