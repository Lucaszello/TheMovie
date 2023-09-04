import { Box, Container, Grid } from "@mantine/core";
import { usePeople } from "../../api";
import PeopleBody from "./PeopleBody";
import { PeopleProp } from "../../type/type";
import HeroLoader from "../../Loader/heroLoader";

const People = () => {
  const { data, isLoading } = usePeople();

  if (isLoading) {
    return <HeroLoader/>;
  }


  return (
    <Container size={"86.5rem"}>
      <Grid columns={12}>
        {data.map((item: PeopleProp) => (
          <Grid.Col lg={2} md={3} sm={4} span={6} key={item.id}>
            <PeopleBody item={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default People;
