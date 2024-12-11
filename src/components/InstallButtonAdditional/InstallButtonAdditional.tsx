import clsx from "clsx";
import { extensionLink } from "../../constants/constants";
import styles from "./InstallButtonAdditional.module.css";
import { useTranslation } from "react-i18next";

const InstallButtonAdditional = ({ variant }: { variant: string }) => {
  const { t } = useTranslation();

  return (
    <a
      href={extensionLink}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      className={clsx(styles[`install-button-additional`], styles[variant])}
    >
      {t("install-button-additional")}
    </a>
  );
};

export default InstallButtonAdditional;
