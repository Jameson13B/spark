import * as styles from "./styles/styles.css.ts"
import tokens from "./styles/theme.css.ts"

export const Confetti = ({
  index,
  shape,
}: {
  index: number
  shape: "circle" | "square"
}) => {
  const randomSize = Math.random() * 100 + 30

  return (
    <span
      key={index}
      className={styles.confetti + " confetti"}
      style={{
        borderRadius: shape === "circle" ? "50%" : "16px",
        backgroundColor:
          tokens.colors[
            `palette${(Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5}`
          ],
        height: randomSize,
        width: randomSize,
        left: `${Math.random() * 100}%`,
      }}
    />
  )
}
