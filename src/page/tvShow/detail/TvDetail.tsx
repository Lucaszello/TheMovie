import { useParams } from "react-router-dom";
import { useTvDetail } from "../../../api";
import HeroLoader from "../../../Loader/heroLoader";
import TvDetailBody from "./TvDetailBody";

const TvDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useTvDetail(Number(id));

  if (isLoading) {
    return <HeroLoader />;
  }
  

  return (
    <div>
        <TvDetailBody item={data} />
    </div>
  );
};

export default TvDetail;
