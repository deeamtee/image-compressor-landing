import clsx from "clsx";
import styles from "./Chevron.module.css";

const Chevron = ({ variant, isOpen }: { variant: string; isOpen: boolean }) => {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(styles[`chevron-icon`], isOpen && styles.active)}
    >
      <path
        d="M8.2724 9.57012L4.06592 4.52236C3.57419 3.93228 3.99379 3.03641 4.7619 3.03641L12.2179 3.03641C12.986 3.03641 13.4056 3.93228 12.9139 4.52235L8.70738 9.57012C8.59419 9.70595 8.38558 9.70595 8.2724 9.57012Z"
        fill={variant === "footer" ? "#FFFFFF" : "#0D1415"}
      />
    </svg>
  );
};

export default Chevron;
