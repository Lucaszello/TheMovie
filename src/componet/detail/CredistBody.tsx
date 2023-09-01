import { Box, createStyles } from "@mantine/core";
import { CastProp } from "../../type/type";

const useStyles = createStyles({
  img: {
    width: 150,
    height: 150,
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
        src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
        className={classes.img}
        alt=""
      />
      <Box component="p" w={150} sx={{ color: "white", textAlign: "center" }}>
        {item.name}
      </Box>
    </>
  );
};

export default CredistBody;
