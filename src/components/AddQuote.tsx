import { useState } from "react"
import * as styles from "../styles/styles.css"
import { handleAddDoc } from "../firebase"

export const AddQuote = ({
  setAddingQuote,
}: {
  setAddingQuote: (addingQuote: boolean) => void
}) => {
  const [quote, setQuote] = useState<string>("")
  const [author, setAuthor] = useState<string>("David")
  const [feedback, setFeedback] = useState<string | null>(null)

  return (
    <div className={styles.addQuote}>
      {feedback && <p className={styles.feedback}>{feedback}</p>}
      <input
        type="text"
        className={styles.quoteInput}
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Enter quote here..."
      />
      <div className={styles.radioContainer}>
        <input
          className={styles.radioButton}
          type="radio"
          name="David"
          value="David"
          checked={author === "David"}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className={styles.radioLabel} htmlFor="David">
          ← David
        </label>
        <input
          className={styles.radioButton}
          type="radio"
          name="Jameson"
          value="Jameson"
          checked={author === "Jameson"}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label className={styles.radioLabel} htmlFor="Jameson">
          ← Jameson
        </label>
      </div>
      <button
        className={styles.button + " " + styles.primaryButton}
        onClick={() => {
          if (quote.length === 0) {
            return setFeedback("⚠️ Please enter a quote")
          }
          try {
            handleAddDoc("sparks", { text: quote, submittedBy: author })
            setFeedback("✅ Quote added successfully")
          } catch (error) {
            setFeedback("❌ Error adding quote")
            console.error(error)
          }
        }}
      >
        Add Quote
      </button>
      <button
        className={styles.button}
        onClick={() => {
          setQuote("")
          setAuthor("David")
          setAddingQuote(false)
        }}
      >
        Cancel
      </button>
    </div>
  )
}
