import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import * as styles from "./styles.css"
import { sparksList } from "./sparks.ts"

export const Spark: React.FC = () => {
  const [sparks, setSparks] = useState(sparksList)

  useGSAP(() => {
    gsap.to(".spark", {
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7, none)",
    })
  }, [sparks])

  useEffect(() => {
    const timer = setTimeout(async () => {
      const fadeOut = gsap.to(".spark", {
        opacity: 0,
        duration: 1,
        ease: "expoScale(0.5,7, none)",
        onComplete: () => {
          const copy = [...sparks]
          const first = copy.shift()
          if (first) {
            copy.push(first)
            setSparks(copy)
          }
        },
      })

      return () => {
        fadeOut.kill()
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [setSparks, sparks])

  return <h1 className={styles.spark + " spark"}>{sparks[0].text}</h1>
}
