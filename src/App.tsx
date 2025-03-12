import { useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ExpoScaleEase } from "gsap/EasePack"

import { Menu } from "./Menu.tsx"
import { Confetti } from "./Confetti.tsx"
import * as styles from "./styles/styles.css.ts"
import { Spark } from "./Spark.tsx"
import { Drawer } from "./Drawer.tsx"
import { ConfigProvider, theme } from "antd"
import { useDarkMode } from "./styles/useDarkMode.tsx"
import { darkTheme, lightTheme } from "./styles/theme.css.ts"

gsap.registerPlugin(ExpoScaleEase)

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode(lightTheme, darkTheme)
  const [open, setOpen] = useState(false)
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
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className={styles.confettiContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <Confetti key={index} index={index} shape={shape} />
        ))}
      </div>
      <div className={styles.scrim}>
        <Spark />
        <Menu
          isDarkMode={isDarkMode}
          openDrawer={() => setOpen(true)}
          shape={shape}
          setShape={setShape}
          toggleDarkMode={() => setIsDarkMode((prevMode: boolean) => !prevMode)}
        />
        <Drawer open={open} setOpen={setOpen} />
      </div>
    </ConfigProvider>
  )
}

export default App
