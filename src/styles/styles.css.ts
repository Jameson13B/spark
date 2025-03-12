import { globalStyle, style } from "@vanilla-extract/css"
import tokens from "./theme.css.ts"

// Reset and base styles
globalStyle("*", { boxSizing: "border-box" })
globalStyle("body", {
  backgroundColor: tokens.colors.background,
  color: tokens.colors.text,
  fontFamily: "Helvetica, Arial, sans-serif",
  margin: 0,
  padding: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100dvh",
})
globalStyle("#root", {
  margin: 0,
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

// Spark Styles
export const spark = style({
  fontSize: "2rem",
  fontWeight: "bold",
  maxWidth: "768px",
  textAlign: "center",
  color: tokens.colors.text,
})

// Scrim Styles
export const scrim = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  width: "100%",
  minHeight: "100dvh",
  backgroundColor: tokens.colors.scrim,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  position: "absolute",
})

// Confetti Styles
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

// Drawer Styles
export const drawer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
})
export const drawerDetails = style({
  textAlign: "center",
  width: "100%",
  height: "97%",
})
export const animationBar = style({
  borderRadius: "10px",
  height: "1%",
  margin: "1% 0",
  backgroundColor:
    tokens.colors[
      `palette${(Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5}`
    ],
})
