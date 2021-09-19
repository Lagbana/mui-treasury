import { CSSObject } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";
import {
  infoClasses,
  InfoSlotStyles,
  InfoThemeVariant,
} from "@mui-treasury/component-info";

type Output = Required<Pick<Components, "JunInfo">>;

declare module "@mui-treasury/component-info" {
  interface InfoPropsVariantOverrides {
    n04: true;
  }
}

export const getInfoN04Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      display: "block",
      textAlign: "center",
      color: "#9e9e9e",
      letterSpacing: "2px",
      fontSize: 14,
      marginTop: 12,
    },
    head: {
      textAlign: "center",
      fontSize: 32,
      lineHeight: 2,
      fontWeight: 300,
      fontFamily:
        // eslint-disable-next-line max-len
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      marginBottom: "0.72em",
      "&:after": {
        content: '""',
        width: 24,
        height: 2,
        backgroundColor: "#ddd",
        display: "block",
        margin: "8px auto",
        borderRadius: 2,
      },
    },
    body: {
      textAlign: "center",
      fontSize: 14,
      color: palette.mode === "dark" ? "#999" : "#222",
      lineHeight: 1.75,
      width: "88%",
      margin: "0 auto",
    },
  };
};

export const getInfoN04Theme = (theme: Theme): Output => {
  const { eyebrow, head, body } = getInfoN04Styles({ theme });
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

export const getInfoN04Variant = (theme: Theme): InfoThemeVariant => {
  const { eyebrow, head, body } = getInfoN04Styles({ theme });
  return {
    props: { variant: "n04" },
    style: {
      [`& .${infoClasses.head}`]: head,
      [`& .${infoClasses.body}`]: body,
      [`& .${infoClasses.eyebrow}`]: eyebrow,
    },
  };
};