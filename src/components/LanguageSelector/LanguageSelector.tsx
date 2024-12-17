import clsx from "clsx";
import styles from "./LanguageSelector.module.css";
import Chevron from "../icons/Chevron/Chevron";
import { flags } from "../../constants/constants";
import FlagIcon from "../icons/FlagIcon/FlagIcon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ variant }: { variant: string }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("ru");

  useEffect(() => {
    const browserLang = i18n.language || "en";
    setActiveLang(browserLang);
  }, [i18n.language]);

  const handleClick = (lang: string) => {
    setActiveLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    const lngSelectorContainer = document.getElementById(
      "language-selector-container"
    );

    if (!lngSelectorContainer?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div
      className={styles[`language-selector__container`]}
      id="language-selector-container"
    >
      <button
        className={clsx(styles[`language-selector`], styles[variant])}
        onClick={toggleDropdown}
      >
        <FlagIcon flag={flags.find((flag) => flag.lang === activeLang)!} />
        <Chevron variant={variant} isOpen={isOpen} />
      </button>
      <div
        className={clsx(
          styles[`language-selector__dropdown`],
          isOpen && styles.visible,
          styles[variant]
        )}
      >
        <ul className={styles[`language-selector__dropdown-list`]}>
          {flags.map((flag) => {
            return (
              <li
                key={flag.id}
                className={styles[`language-selector__dropdown-item`]}
                onClick={() => handleClick(flag.lang)}
              >
                <FlagIcon flag={flag} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
