import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((response) => setProjects(response.data.projects));
  }, []);

  return <Layout projects={projects}>Work</Layout>;
};

export default Work;
