import { useState, useEffect} from "react";
import Head from "next/head";
import axios from "axios";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.scss";

const title = "Teun Zengerink";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps): React.ReactElement => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((response) => setProjects(response.data.projects));
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar pageTitle={title} projects={projects} />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
