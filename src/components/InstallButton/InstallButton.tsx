import ChromeIcon from "../icons/ChromeIcon/ChromeIcon";
import styles from "./InstallButton.module.css";
import { extensionLink } from "../../constants/constants";
import { useTranslation } from "react-i18next";
const InstallButton = ({ variant }: { variant: string }) => {
  const { t } = useTranslation();

  return (
    <a
      href={extensionLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles[`install-button`]} ${styles[variant]}`}
      role="button"
    >
      <ChromeIcon variant={variant} /> {t("install-button")}
    </a>
  );
};

export default InstallButton;
