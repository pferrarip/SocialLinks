import styles from "./Card.module.css";
function Card() {
  return (
    <div className={styles.CardStyle}>
      <div className={styles.profile}></div>
      <div className={styles.stats}>
        <h3 id={styles.name}>Pedro Henrique Ferrari</h3>
        <h5 id={styles.statss}>São Paulo, Brazil</h5>
      </div>
      <h6 id={styles.phrase}>"Front-end developer and avid reader"</h6>
      <div className={styles.content}>
        <a className={styles.GitHub} href="https://github.com/pferrarip">
          GitHub
        </a>
        <a
          className={styles.Front}
          href="https://www.frontendmentor.io/profile/pferrarip"
        >
          Frontend Mentor
        </a>
        <a
          className={styles.Linkedin}
          href="https://www.linkedin.com/in/pedro-henrique-ferrari-brogliato-825606269/"
        >
          Linkedin
        </a>
        <a className={styles.Email} href="mailto:phnasc122@gmail.com">
          Email
        </a>
        <a
          className={styles.Instagram}
          href="https://www.instagram.com/pedrof3rrari/"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
export default Card;
