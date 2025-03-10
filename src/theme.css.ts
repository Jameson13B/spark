import { createGlobalTheme, globalStyle } from "@vanilla-extract/css"

export const vars = createGlobalTheme("*", {
  color: {
    lightBackground: "#fff",
    lightText: "#000",
    lightButton: "#000",
    lightScrim: "rgba(0, 0, 0, 0.3)",
    darkBackground: "#121212",
    darkText: "#e0e0e0",
    darkButton: "#333",
    darkScrim: "rgba(0, 0, 0, 0.5)",
    palette1: "#9b5de5",
    palette2: "#f15bb5",
    palette3: "#fee440",
    palette4: "#00bbf9",
    palette5: "#00f5d4",
  },
})

globalStyle("*", {
  boxSizing: "border-box",
})
globalStyle("body", {
  // backgroundColor: vars.color.dark,
  margin: 0,
  padding: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100dvh",
  fontFamily: "Helvetica, Arial, sans-serif",
  // Use light mode as default
  backgroundColor: vars.color.lightBackground,
  color: vars.color.lightText,
})
globalStyle("#root", {
  margin: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minWidth: "320px",
  minHeight: "100dvh",
  position: "relative",
  overflow: "hidden",
})

// Dark mode styles
globalStyle("body.dark-mode", {
  backgroundColor: vars.color.darkBackground,
  color: vars.color.darkText,
})
globalStyle("#float-button.dark-mode", {
  backgroundColor: vars.color.darkButton,
})
globalStyle(".scrim.dark-mode", {
  backgroundColor: vars.color.darkScrim,
})

export default vars
