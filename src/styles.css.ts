import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "./theme.css.ts"

export const scrim = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  width: "100%",
  minHeight: "100vh",
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
  height: "100vh",
})
export const confetti = style({
  borderRadius: "50%",
  position: "absolute",
  top: "100%",
})
