import igniteLogo from "../assets/ignite-logo.svg";
import styles from "./Header.module.css";
console.log(igniteLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite feed</strong>
      <img src={igniteLogo}></img>
    </header>
  );
}
