import { useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ExpoScaleEase } from "gsap/EasePack"

import { Menu } from "./Menu.tsx"
import { Confetti } from "./Confetti.tsx"
import * as styles from "./styles.css.ts"
import { Spark } from "./Spark.tsx"

gsap.registerPlugin(ExpoScaleEase)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(isDarkModePreferred())
  const [shape, setShape] = useState<"circle" | "square">("circle")

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".confetti").forEach((confetti) => {
      const randomDuration = Math.floor(Math.random() * 3) + 8 // Random duration between 8 and 11 seconds

      gsap
        .timeline({ repeat: -1 })
        .to(confetti, {
          top: "calc(0% - 100px)", // Move upwards
          duration: randomDuration, // Duration of the upward animation
          ease: "expoScale(0.5,7, none)",
          delay: Math.random() * 10, // Random initial delay between 0 and 9 seconds
          stagger: {
            each: 0.5,
            from: "random",
          },
        })
        .to(confetti, {
          top: "100%", // Move downwards
          duration: randomDuration, // Duration of the downward animation
          ease: "expoScale(0.5,7, none)",
        })
    })
  })

  return (
    <>
      <div className={styles.confettiContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <Confetti key={index} index={index} shape={shape} />
        ))}
      </div>
      <div className={`${styles.scrim} ${isDarkMode ? "dark-mode" : ""}`}>
        <Spark />
        <Menu
          isDarkMode={isDarkMode}
          shape={shape}
          setShape={setShape}
          toggleDarkMode={() => {
            setIsDarkMode((prevMode: boolean) => !prevMode)
            document.body.classList.toggle("dark-mode")
          }}
        />
      </div>
    </>
  )
}

export default App

function isDarkModePreferred() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return false
    }
  }
  return false
}
