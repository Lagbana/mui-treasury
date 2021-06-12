import "@mui-treasury/component-navigation";
import { navigationClasses } from "@mui-treasury/component-navigation";
const itemHorzPadding = 3;
const getItemStyles = ({ palette, spacing }) => {
  return {
    color: palette.text.primary,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    "&.Mui-active": {
      "&:after": {
        opacity: 1,
        transform: "scale(1, 1)",
      },
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: spacing(itemHorzPadding / 2),
      width: `calc(100% - ${spacing(itemHorzPadding)})`,
      height: 2,
      transform: "scale(0, 1)",
      backgroundColor: palette.text.primary,
    },
    "&:hover": {
      "&:after": {
        opacity: 0.38,
        transform: "scale(1, 1)",
      },
    },
  };
};
export const getNavigationZoomStyles = ({ theme }) => ({
  [`& .${navigationClasses.item}`]: getItemStyles(theme),
});
export const getNavigationZoomTheme = (theme) => {
  return {
    JunNavigation: {
      styleOverrides: {
        item: getItemStyles(theme),
      },
    },
  };
};
