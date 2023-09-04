import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "../../api";

const TvSearch = () => {
   const { pathname } = useLocation();
   const path = pathname.split("/")[1];
   const { search } = useParams()
   console.log(search);
   

   const {data } = useSearch(path,search)

  console.log(data);
  

  return (
    <div>TvSearch</div>
  )
}

export default TvSearch