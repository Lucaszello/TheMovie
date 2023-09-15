import { Box, createStyles } from "@mantine/core";
import { CastProp } from "../../type/type";

const useStyles = createStyles({
  img: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top",
  },
});

const CredistBody = ({ item }: { item: CastProp }) => {
  const { classes } = useStyles();
  return (
    <>
      <img
        src={`http://image.tmdb.org/t/p/w500/${item?.profile_path}`}
        className={classes.img}
        alt=""
      />
      <Box component="p" w={120} sx={{ color: "white", textAlign: "center" }}>
        {item.name}
      </Box>
    </>
  );
};

export default CredistBody;
