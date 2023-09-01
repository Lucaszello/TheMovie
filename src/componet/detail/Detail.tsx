import { Box } from "@mantine/core";
import { Params, useParams } from "react-router-dom";
import { useDetail } from "../../api";
import {lazy,Suspense} from "react"
import HeroLoader from "../../Loader/heroLoader";
import DetailLoader from "../../Loader/DetailLoader";
const DetailBody = lazy(() => import("./DetailBody") )

const Detail = () => {
  const { id }: Readonly<Params<string>> = useParams();
  const { data, isLoading } = useDetail(Number(id));
    if (isLoading) {
      return <HeroLoader/>;
    }

  return (
    <Box>
      <Suspense fallback={<DetailLoader/>}>
        <DetailBody item={data} />
      </Suspense>
    </Box>
  );
};

export default Detail;
