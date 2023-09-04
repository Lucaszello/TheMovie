import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "../../api";
import { upComingProp } from "../../type/type";
import NotfoundSearch from "./NotfoundSearch";
import { Container, Grid, Skeleton } from "@mantine/core";
import HeroLoader from "../../Loader/heroLoader";
import { useMediaQuery } from "@mantine/hooks";
import { lazy, Suspense } from "react";
const SearchMovieBody = lazy(() => import("./SearchMovieBody"));

const SearchMovie = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width: 420px)");

  const path = pathname.split("/")[1];
  const { search } = useParams();

  const { data, isLoading } = useSearch(path, search);

  if (isLoading) {
    return <HeroLoader />;
  }

  return (
    <Container size={"86.5rem"}>
      {data.length ? (
        <Grid columns={12}>
          {data.map((item: upComingProp) => (
            <>
              {item.backdrop_path && item.poster_path && (
                <Grid.Col
                  lg={2}
                  md={3}
                  sm={3}
                  span={matches ? 6 : 6}
                  key={item.id}
                >
                  <Suspense
                    fallback={
                      <>
                        <Skeleton
                          height={matches ? 240 : 350}
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
                    <SearchMovieBody item={item} />
                  </Suspense>
                </Grid.Col>
              )}
            </>
          ))}
        </Grid>
      ) : (
        <>
          <NotfoundSearch />
        </>
      )}
    </Container>
  );
};

export default SearchMovie;
