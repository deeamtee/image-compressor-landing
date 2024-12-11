import clsx from "clsx";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({
  burgerMenuActive,
  onClick,
}: {
  burgerMenuActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={styles[`burger-button-container`]} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          styles[`burger-button`],
          burgerMenuActive && styles.active
        )}
      >
        <line y1="1" x2="24" y2="1" stroke="black" strokeWidth="2" />
        <line y1="8" x2="24" y2="8" stroke="black" strokeWidth="2" />
        <line y1="15" x2="24" y2="15" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default BurgerButton;
