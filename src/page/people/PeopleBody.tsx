import { Box, createStyles } from "@mantine/core";
import { PeopleProp } from "../../type/type"

const useStyles = createStyles((theme) => ({
  img: {
    width: "100%",
    height: 280,
    objectFit: "cover",
    objectPosition: "top",
    opacity: 0.95,
    transition : "all 0.5s",
    [theme.fn.largerThan("md")]: {
      height: 250,
    },
    [theme.fn.smallerThan("xs")]: {
      height: 230,
    },
  },
  header: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
    },
  },
}));
const PeopleBody = ({item} : {item : PeopleProp}) => {
    const {classes} = useStyles()
  return (
    <Box
      sx={{
        backgroundColor: "#000000db",
        cursor: "pointer",
        transition : " 0.5s",
        "&:hover .header": { color: "#ff00008a"  , opacity : 0.8},
      }}
      component="div"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
        alt={item.profile_path}
        className={classes.img}
      />
      <Box component="div">
        <Box
          component="h3"
          className={`${classes.header} header`}
          pb={10}
          sx={{ textAlign: "center", color: "#f0f0f0" }}
        >
          {item.name}
        </Box>
      </Box>
    </Box>
  );
}

export default PeopleBody