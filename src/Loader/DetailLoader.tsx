import { Grid, Skeleton } from "@mantine/core"

const DetailLoader = () => {
  return (
    <Grid columns={12}>
      <Grid.Col lg={2}>
        <Skeleton
          width={"100%"}
          height={"100%"}
          sx={{
            "&::after": {
              backgroundColor: "#000000db",
            },
          }}
        />
      </Grid.Col>
      <Grid.Col></Grid.Col>
    </Grid>
  );
}

export default DetailLoader