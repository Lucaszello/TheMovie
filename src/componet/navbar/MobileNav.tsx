import { Box, Drawer, createStyles } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "../../api/nav";

const useStyle = createStyles(() => ({
  navli: {
    listStyle: "none",
    paddingBlock: 10,
  },
  navLink: {
    textDecoration: "none",
    color: "#D8D9DA",
    fontSize: 30,
    position: "relative",
  },
  under: {
    color: "#ff00008a",
  },
}));

const MobileNav = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const { pathname } = useLocation();
  const { classes , cx } = useStyle();
  return (
    <Drawer opened={opened} onClose={toggle}>
      <Box>
        <Box component="ul">
          {Nav.map((item) => {
            const isActive = item.path === pathname;
            return (
              <li key={item.path} className={classes.navli}>
                <Link
                  to={item.path}
                  className={cx(classes.navLink , {[classes.under] : isActive })  }
                  data-text={item.name}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
