"use client";

import styles from "./ContactButton.module.css";
import { Send, Check } from "lucide-react";

export default function ContactButton() {
  const handleClick = (e: React.MouseEvent) => {
    // You can intercept the click here to trigger a backend email route.
    // The visual animation purely uses the CSS :focus selector.
    // For actual delivery, consider window.location.href = "mailto:..." or a fetch to /api/contact
    setTimeout(() => {
      window.location.href = "mailto:career.sharmapiyush@gmail.com?subject=Contact%20from%20HC%20Portfolio";
    }, 1500); // Wait for the animation before redirecting
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <div className={styles.outline}></div>
      <div className={`${styles.state} ${styles['state--default']}`}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
        <p>
          <span style={{ "--i": 0 } as React.CSSProperties}>S</span>
          <span style={{ "--i": 1 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>d</span>
        </p>
      </div>
      <div className={`${styles.state} ${styles['state--sent']}`}>
        <div className={styles.icon}>
          <Check />
        </div>
        <p>
          <span style={{ "--i": 5 } as React.CSSProperties}>S</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>n</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>t</span>
        </p>
      </div>
    </button>
  );
}
