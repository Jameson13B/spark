import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import * as styles from "../styles/styles.css"
import tokens from "../styles/theme.css.ts"
import { handleSnapshot } from "../firebase.ts"
export const Spark: React.FC = () => {
  const [sparks, setSparks] = useState<
    { id: string; text: string; submittedBy: string }[]
  >([])

  useEffect(() => {
    handleSnapshot("sparks", (snapshot) => {
      const sparksFromDB = snapshot.docs
        .map((doc) => ({
          sort: Math.random(),
          value: {
            ...doc.data(),
            id: doc.id,
          },
        })) // sort the sparks by random
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

      setSparks(
        sparksFromDB as { id: string; text: string; submittedBy: string }[]
      )
    })
  }, [])

  useGSAP(() => {
    gsap.to(".spark", {
      opacity: 1,
      duration: 1,
      ease: "expoScale(0.5,7, none)",
    })
    gsap.fromTo(
      "#divider",
      {
        backgroundColor:
          sparks[0]?.submittedBy === "David"
            ? tokens.colors.david
            : tokens.colors.jameson,
        duration: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    )
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
      const dividerFadeOut = gsap.to("#divider", { opacity: 0.1, duration: 1 })

      return () => {
        fadeOut.kill()
        dividerFadeOut.kill()
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [setSparks, sparks])

  return (
    <h1 className={styles.spark + " spark"}>
      {sparks.length > 0 && sparks[0].text}
    </h1>
  )
}
