import { Container, StylesProvider, Typography } from "@material-ui/core";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="h6" className={styles.footer__text}>
        Rivanildo Júnior - Desenvolvedor JavaScript
      </Typography>
    </footer>
  );
};

export default Footer;
