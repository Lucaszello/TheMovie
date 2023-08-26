import { Box } from "@mantine/core";
import { Params, useParams } from "react-router-dom";
import { useDetail } from "../../api";
import DetailBody from "./DetailBody";

const Detail = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const { data, isLoading } = useDetail(Number(id));
  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  console.log(data);

  return (
    <Box>
      <DetailBody item={data} />
    </Box>
  );
};

export default Detail;
