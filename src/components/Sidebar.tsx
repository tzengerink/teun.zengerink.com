import { Project } from "../pages/api/projects";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  projects: Project[];
  pageTitle: string;
}

const Sidebar = (props: SidebarProps) => (
  <aside className={styles.sidebar}>
    <a href="/">
      <h1>{props.pageTitle}</h1>
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
        {props.projects.map((project) => (
          <li>
            <a href="#">{project.title}</a>
          </li>
        ))}
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
  </aside>
);

export default Sidebar;
