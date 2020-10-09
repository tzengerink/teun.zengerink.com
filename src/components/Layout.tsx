import Head from "next/head";
import Sidebar from "./Sidebar";
import { Project } from "../pages/api/projects";
import styles from "./Layout.module.scss";

const title = "Teun Zengerink";

interface LayoutProps {
  projects: Project[];
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar pageTitle={title} projects={props.projects} />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
