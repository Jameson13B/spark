import {
  createTheme,
  createGlobalTheme,
  createThemeContract,
} from "@vanilla-extract/css"

const root = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
})

const colors = createThemeContract({
  background: "",
  text: "",
  scrim: "",
  palette1: "",
  palette2: "",
  palette3: "",
  palette4: "",
  palette5: "",
  jameson: "",
  david: "",
})
export const lightTheme = createTheme(colors, {
  background: "#fff",
  text: "#000",
  scrim: "rgba(0, 0, 0, 0.3)",
  palette1: "#9b5de5",
  palette2: "#f15bb5",
  palette3: "#fee440",
  palette4: "#00bbf9",
  palette5: "#00f5d4",
  jameson: "yellow",
  david: "orange",
})
export const darkTheme = createTheme(colors, {
  background: "#121212",
  text: "#e0e0e0",
  scrim: "rgba(0, 0, 0, 0.5)",
  palette1: "#9b5de5",
  palette2: "#f15bb5",
  palette3: "#fee440",
  palette4: "#00bbf9",
  palette5: "#00f5d4",
  jameson: "yellow",
  david: "orange",
})

export default { ...root, colors }
