import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "./theme.css.ts"

export const scrim = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  width: "100%",
  minHeight: "100dvh",
  backgroundColor: vars.color.lightScrim,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  position: "absolute",
})
globalStyle(".scrim.dark-mode", {
  backgroundColor: vars.color.darkScrim,
})
export const spark = style({
  fontSize: "2rem",
  fontWeight: "bold",
  maxWidth: "768px",
  textAlign: "center",
  // color: vars.color.light,
})

export const confettiContainer = style({
  position: "relative",
  width: "100%",
  height: "100dvh",
})
export const confetti = style({
  borderRadius: "50%",
  position: "absolute",
  top: "100%",
})

export const drawer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
})
export const animationBar = style({
  borderRadius: "10px",
  height: "1%",
  margin: "1% 0",
  backgroundColor:
    vars.color[
      `palette${(Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5}`
    ],
})
export const drawerDetails = style({
  textAlign: "center",
  width: "100%",
  height: "97%",
})
