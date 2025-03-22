import { useEffect, useRef, useState } from "react"
import { Drawer as AntdDrawer } from "antd"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import * as styles from "../styles/styles.css"
import tokens from "../styles/theme.css"
import { AddQuote } from "./AddQuote"

export const Drawer = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const animationBarRef = useRef<HTMLDivElement>(null)
  const [colorIndex, setColorIndex] = useState<number>(0)
  const [addingQuote, setAddingQuote] = useState<boolean>(false)

  useEffect(() => {
    if (!open) return

    setColorIndex((prev) => prev + 1)
    const colorChange = setInterval(() => {
      setColorIndex((prev) => (prev === 4 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(colorChange)
  }, [open])

  useGSAP(() => {
    if (!open) return

    gsap.to(animationBarRef.current, {
      backgroundColor:
        tokens.colors[`palette${colorIndex}` as keyof typeof tokens.colors],
      duration: 2,
      ease: "power2.inOut",
    })
  }, [colorIndex, open])

  useGSAP(() => {
    if (open && animationBarRef.current) {
      gsap.fromTo(
        animationBarRef.current,
        { width: 0 },
        { width: "100%", duration: 1.5, ease: "bounce.out" }
      )
    }

    if (open) {
      gsap.fromTo(
        "#drawer-details",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.5, ease: "expo.out" }
      )
    }
  }, [open])

  return (
    <>
      <AntdDrawer
        title="Basic Drawer"
        onClose={() => setOpen(false)}
        open={open}
        zIndex={1001}
      >
        <div className={styles.drawer}>
          <div ref={animationBarRef} className={styles.animationBar} />
          <div id="drawer-details" className={styles.drawerDetails}>
            <h2>Spark</h2>
            <h4>
              Spark is a simple, elegant, and peaceful way to get a spark of
              inspiration.
            </h4>
            <p>
              The goal is to provide peace, confidence, happiness, and
              inspiration to everyone who needs it.
            </p>
            <h5>
              Remember to smile and share the spark of inspiration with those
              you love.
            </h5>
            <p>More inspiration will be constantly added.</p>
            <hr
              style={{ width: "70%", margin: "30px auto" }}
              onClick={() => setAddingQuote(true)}
            />
            <p style={{ fontSize: "12px" }}>
              Created by{" "}
              <a href="https://jamesonb.com" target="_blank">
                Jameson
              </a>{" "}
              at{" "}
              <a href="https://atomic10.studio" target="_blank">
                Atomic10 Studio
              </a>
            </p>

            {addingQuote && <AddQuote setAddingQuote={setAddingQuote} />}
          </div>
        </div>
      </AntdDrawer>
    </>
  )
}
