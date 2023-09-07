import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "../../api";
import HeroLoader from "../../Loader/heroLoader";
import TvSearchBody from "./TvSearchBody";
import { tv } from "../../type/type";
import { Box, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const TvSearch = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const { search } = useParams();
  const matches = useMediaQuery("(max-width: 720px)");


  const { data, isLoading } = useSearch(path, search);

  if (isLoading) {
    return <HeroLoader />;
  }

  return (
    <Box px={matches ? 30 : 90 }>
      <Grid columns={12}>
        {data.map((item: tv) => (
          <Grid.Col lg={2} key={item.id}>
            <TvSearchBody item={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default TvSearch;
