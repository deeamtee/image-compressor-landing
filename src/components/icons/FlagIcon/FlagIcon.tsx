import styles from "./FlagIcon.module.css";

const FlagIcon = ({ flag }: { flag: { lang: string; image: string } }) => {
  return (
    <img className={styles.flag} src={flag.image} alt={`${flag.lang} flag`} />
  );
};

export default FlagIcon;
