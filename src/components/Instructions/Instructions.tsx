import styles from "./Instructions.module.css";
import image1 from "../../assets/images/instruction-image-1.png";
import image2 from "../../assets/images/instruction-image-2.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Instructions = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.instructions}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.instructions__container}>
          <p className={styles.instructions__title}>
            Image{" "}
            <span className={styles[`instructions__title-accent`]}>
              Compressor -
            </span>{" "}
            <span className={styles.instructions__text}>
              {t("instructions.title")}
            </span>
          </p>

          <div className={styles.instructions__item}>
            <h3 className={styles[`instructions__item-title`]}>
              {t("instructions.paragraphOne")}{" "}
              <span className={styles[`instructions__item-title-accent`]}>
                Image Compressor
              </span>
              .
            </h3>
            <img className={styles[`instructions__item-image`]} src={image1} />
          </div>
          <div className={styles.instructions__item}>
            <h3 className={styles[`instructions__item-title`]}>
              {t("instructions.paragraphTwo")}
            </h3>
            <img className={styles[`instructions__item-image`]} src={image2} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Instructions;
