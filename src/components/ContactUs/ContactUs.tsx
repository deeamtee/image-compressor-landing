import { motion } from "framer-motion";
import { contactMail } from "../../constants/constants";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section className={styles[`contact-us`]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles[`contact-us__container`]}>
          <div className={styles[`contact-us__item`]}>
            <p className={styles[`contact-us__item-text`]}>
              e-mail:{" "}
              <a
                href={`mailto:${contactMail}`}
                className={styles[`contact-us__item-text-accent`]}
              >
                {contactMail}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
