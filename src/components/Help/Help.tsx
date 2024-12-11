import { useState } from "react";
import ToggleIcon from "../icons/ToggleIcon/ToggleIcon";
import styles from "./Help.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<number>(0);

  const handleClick = (itemId: number) => {
    setActiveId(itemId);

    if (itemId === activeId) {
      setActiveId(0);
    }
  };

  const helpItems = [
    {
      id: 1,
      title: t("help.list.0.title"),
      text: t("help.list.0.text"),
    },
    {
      id: 2,
      title: t("help.list.1.title"),
      text: t("help.list.1.text"),
    },
    {
      id: 3,
      title: t("help.list.2.title"),
      text: t("help.list.2.text"),
    },
    {
      id: 4,
      title: t("help.list.3.title"),
      text: t("help.list.3.text"),
    },
    {
      id: 5,
      title: t("help.list.4.title"),
      text: t("help.list.4.text"),
    },
    {
      id: 6,
      title: t("help.list.5.title"),
      text: t("help.list.5.text"),
    },
  ];

  return (
    <section className={styles.help}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.help__container}>
          <h2 className={styles.help__title}>{t("help.title")}</h2>
          <div className={styles.help__content}>
            <ul className={styles.help__list}>
              {helpItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={clsx(
                      styles.help__item,
                      activeId === item.id && styles.active
                    )}
                    onClick={() => handleClick(item.id)}
                    role="button"
                  >
                    <h3 className={styles[`help__item-title`]}>
                      {item.title}
                      <span style={{ width: "24px", height: "24px" }}>
                        <ToggleIcon activeId={activeId} id={item.id} />
                      </span>
                    </h3>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: activeId === item.id ? "auto" : 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className={clsx(styles[`help__item-text`])}>
                        {item.text}
                      </p>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Help;
