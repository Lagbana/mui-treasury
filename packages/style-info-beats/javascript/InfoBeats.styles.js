import { infoClasses } from "@mui-treasury/component-info";
const titleFontSize = "1.25rem";
const subtitleFontSize = "1.25rem";
const captionFontSize = "1rem";
export const getInfoBeatsStyles = (arg) => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    head: {
      fontSize: titleFontSize,
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "0px",
    },
    body: {
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    eyebrow: {
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      color: "#d57b7b",
      fontSize: captionFontSize,
      textTransform: "initial",
      lineHeight: 1.5,
      ".JunInfo-body + &": {
        marginTop: "0.5rem",
      },
    },
  };
};
export const getInfoBeatsTheme = (theme) => {
  const { eyebrow, head, body } = getInfoBeatsStyles({ theme });
  return {
    JunInfo: {
      styleOverrides: {
        eyebrow: eyebrow,
        head: head,
        body: body,
      },
    },
  };
};
export const getInfoBeatsVariant = (theme) => {
  const { eyebrow, head, body } = getInfoBeatsStyles({ theme });
  return {
    props: { variant: "beats" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};
