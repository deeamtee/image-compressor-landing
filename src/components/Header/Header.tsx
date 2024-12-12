import styles from "./Header.module.css";
import InstallButton from "../InstallButton/InstallButton";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import InstallButtonAdditional from "../InstallButtonAdditional/InstallButtonAdditional";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import BurgerButton from "../icons/BurgerButton/BurgerButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isMainPage = location.pathname === "/home";

  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const navLinks = [
    {
      id: 1,
      title: t("nav.main"),
      url: "/home",
    },
    // {
    //   id: 2,
    //   title: t("nav.help"),
    //   url: "/help",
    // },
    {
      id: 3,
      title: t("nav.contact-us"),
      url: "/contact-us",
    },
    {
      id: 4,
      title: t("nav.instructions"),
      url: "/instructions",
    },
  ];

  const handleBurgerClick = () => {
    setBurgerMenuActive(!burgerMenuActive);

    if (burgerMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavLinkClick = () => {
    setBurgerMenuActive(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__container}>
          <Link to="/home" onClick={handleNavLinkClick}>
            <h1 className={styles.header__logo}>
              Image{" "}
              <span className={styles[`header__logo-accent`]}>Compressor</span>
            </h1>
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className={styles.header__item}>
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        clsx(styles.header__link, isActive && styles.active)
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.header__buttons}>
            {isMainPage && <InstallButton variant={"header"} />}
            {!isMainPage && <InstallButtonAdditional variant={"header"} />}
            {isMainPage && <LanguageSelector variant={"header"} />}
            <BurgerButton
              burgerMenuActive={burgerMenuActive}
              onClick={handleBurgerClick}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles[`header__burger-overlay`],
          burgerMenuActive && styles.active
        )}
        onClick={handleBurgerClick}
      ></div>
      <div
        className={clsx(
          styles[`header__burger-menu`],
          burgerMenuActive && styles.active
        )}
      >
        <nav className={styles[`header__burger-nav`]}>
          <ul className={styles[`header__burger-list`]}>
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={styles[`header__burger-item`]}
                  onClick={handleNavLinkClick}
                >
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      clsx(
                        styles[`header__burger-link`],
                        isActive && styles.active
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
