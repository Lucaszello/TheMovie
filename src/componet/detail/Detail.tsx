import { Box } from "@mantine/core";
import { Params, useParams } from "react-router-dom";
import { useDetail } from "../../api";
import {lazy,Suspense} from "react"
const DetailBody = lazy(() => import("./DetailBody") )

const Detail = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const { data, isLoading } = useDetail(Number(id));
  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  console.log(data);

  return (
    <Box>
      <Suspense fallback={<Box sx={{color : "white"}}>is Loading...</Box>}>
        <DetailBody item={data} />
      </Suspense>
    </Box>
  );
};

export default Detail;
