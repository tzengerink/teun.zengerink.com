import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.scss";

// TODO: Someway to configure these?
const pageTitle = "Teun Zengerink";
const apiUrl = "http://localhost:3000/api/projects";

const Layout = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios(apiUrl);
      setProjects(response.data.projects);
    };
    fetch();
  }, [projects]);

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar pageTitle={pageTitle} projects={projects} />
      <main className={styles.main}>ADD CONTENT HERE</main>
    </div>
  );
};

export default Layout;
