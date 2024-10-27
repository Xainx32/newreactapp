import Button from "../../button/Button";
import Impressum from "../../impressum/Impressum";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Impressum />
      <Button />
    </footer>
  );
}
