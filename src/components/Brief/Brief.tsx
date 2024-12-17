import { useTranslation } from "react-i18next";
import AppIcon from "../icons/AppIcon/AppIcon";
import InstallButton from "../InstallButton/InstallButton";
import styles from "./Brief.module.css";
import { motion } from "framer-motion";

const Brief = () => {
  const { t } = useTranslation();

  return (
    <section className={styles[`brief`]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles[`brief__container`]}>
          <h2 className={styles[`brief__title`]}>
            Image{" "}
            <span className={styles[`brief__title-accent`]}>Compressor</span>
            <AppIcon />
          </h2>

          <p className={styles[`brief__text`]}>{t("brief.text")}</p>
          <InstallButton variant="brief" />
        </div>
      </motion.div>
    </section>
  );
};

export default Brief;
