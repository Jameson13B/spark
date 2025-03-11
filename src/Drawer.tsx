import { useRef } from "react"
import { Drawer as AntdDrawer } from "antd"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import * as styles from "./styles.css"
import { vars } from "./theme.css"

export const Drawer = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
  const animationBarRef = useRef<HTMLDivElement>(null)
  const colorIndexRef = useRef<number>(0)

  const paletteKeys: Array<keyof typeof vars.color> = [
    "palette1",
    "palette2",
    "palette3",
    "palette4",
    "palette5",
  ]

  useGSAP(() => {
    if (open && animationBarRef.current) {
      gsap.fromTo(
        animationBarRef.current,
        { width: 0 },
        { width: "100%", duration: 1.5, ease: "bounce.out" }
      )

      gsap.timeline({ repeat: -1 }).fromTo(
        animationBarRef.current,
        { backgroundColor: vars.color[paletteKeys[colorIndexRef.current]] },
        {
          backgroundColor:
            vars.color[
              paletteKeys[(colorIndexRef.current + 1) % paletteKeys.length]
            ],
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (animationBarRef.current)
              animationBarRef.current.style.backgroundColor =
                vars.color[paletteKeys[colorIndexRef.current]]
          },
          onComplete: () => {
            colorIndexRef.current =
              (colorIndexRef.current + 1) % paletteKeys.length
          },
        }
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
            <hr style={{ width: "70%", margin: "30px auto" }} />
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
          </div>
        </div>
      </AntdDrawer>
    </>
  )
}
