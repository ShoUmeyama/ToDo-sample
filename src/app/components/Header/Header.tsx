import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={`before:content-['ああああ'] ${styles.header}`}>
      ヘッター
    </header>
  )
}
