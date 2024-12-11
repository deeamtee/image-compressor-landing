import clsx from "clsx";
import { contactMail } from "../../constants/constants";
import InstallButtonAdditional from "../InstallButtonAdditional/InstallButtonAdditional";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isMainPage = location.pathname === "/home";

  return (
    <footer
      id="footer"
      className={clsx(styles.footer, !isMainPage && styles.visible)}
    >
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <h2 className={styles.footer__logo}>
            Image{" "}
            <span className={styles[`footer__logo-accent`]}>Compressor</span>
          </h2>
          <p className={styles.footer__text}>
            {t("footer.contact")}{" "}
            <a href={`mailto:${contactMail}`} className={styles.footer__text}>
              {contactMail}
            </a>
          </p>
        </div>
        <div className={styles.footer__right}>
          <InstallButtonAdditional variant={"footer"} />
          <LanguageSelector variant={"footer"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
