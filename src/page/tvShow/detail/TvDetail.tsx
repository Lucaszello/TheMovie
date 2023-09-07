import { useParams } from "react-router-dom"
import { useTvDetail } from "../../../api";

const TvDetail = () => {
  const {id} = useParams();
  const {data} = useTvDetail(Number(id))
  console.log(data);
  
  return (
    <div>TvDetail</div>
  )
}

export default TvDetail