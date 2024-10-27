// import Example from "../../beispiel/Beispiel";
// import Button from "../../button/Button";
import styles from "./Content.module.css";
import image0 from "../../../backgroundPicture.png";
export default function Content() {
  return (
    <div className={styles.contentContainer}>
      <img src={image0} />
      {/* <Example /> */}
    </div>
  );
}
