import Head from "next/head";
import styles from "./Layout.module.scss";

const Layout = () => (
  <div>
    <Head>
      <title>Teun Zengerink</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <a href="/">
        <h1>Teun Zengerink</h1>
      </a>
      <input id="visible" className={styles.checkbox} type="checkbox" />
      <label htmlFor="visible" className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </label>
      <nav className={styles.navigation}>
        <h2>Work</h2>
        <ul>
          <li>ADD WORK LINKS HERE</li>
        </ul>
        <span className={styles.socials}>
          <a href="https://instagram.com/t.zengerink/">
            <img src="/img/instagram.jpg" />
          </a>
          <a href="https://pinterest.com/tzengerink/">
            <img src="/img/pinterest.jpg" />
          </a>
        </span>
      </nav>
    </header>
    <main className={styles.main}>ADD CONTENT HERE</main>
  </div>
);

export default Layout;
