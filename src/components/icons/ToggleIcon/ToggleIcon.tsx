import styles from "./ToggleIcon.module.css";

const ToggleIcon = ({ activeId, id }: { activeId: number; id: number }) => {
  return (
    <>
      {activeId === id ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles[`toggle-icon`]}
        >
          <path
            d="M18 12.0002L6 12.0002"
            stroke="#00A3F4"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles[`toggle-icon`]}
        >
          <path
            d="M12 6.00024L12 18.0002"
            stroke="#00A3F4"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M18 12.0002L6 12.0002"
            stroke="#00A3F4"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default ToggleIcon;
