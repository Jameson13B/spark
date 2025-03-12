import { useState, useEffect } from "react"

export const useDarkMode = (lightTheme: string, darkTheme: string) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window?.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
  )

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove(lightTheme)
      document.body.classList.add(darkTheme)
    } else {
      document.body.classList.remove(darkTheme)
      document.body.classList.add(lightTheme)
    }
  }, [isDarkMode, lightTheme, darkTheme])

  return {
    isDarkMode,
    setIsDarkMode,
    isDarkModePreferred: window?.matchMedia("(prefers-color-scheme: dark)")
      .matches,
  }
}
