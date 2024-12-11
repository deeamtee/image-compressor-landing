import { useState } from "react";
import styles from "./Sorry.module.css";

const Sorry = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className={styles.sorry}>
      <div className={styles.sorry__container}>
        <h2 className={styles.sorry__title}>
          <span className={styles.sorry__title_accent}>Нам жаль, </span> что вы
          уходите 😔
        </h2>
        <p className={styles.sorry__text}>
          Ваши отзывы бесценны для нас. Не могли бы вы уделить минутку и
          рассказать нам о своем опыте? Это займет всего несколько секунд и
          поможет нам сделать наше приложение лучше для всех.
        </p>

        <div className={styles.sorry__form_container}>
          {isLoading && <span className={styles.loader}></span>}
          <iframe
            className={styles.sorry__form}
            src="https://docs.google.com/forms/d/e/1FAIpQLSdAAV6IBIHDXTmQ13EhoUhKfxs7p4UEphGcDxw9n-rl72Jk6A/viewform"
            onLoad={handleLoad}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Sorry;
