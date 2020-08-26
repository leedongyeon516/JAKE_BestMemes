import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import loading from "../images/loading.gif";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      <img className="loading" src={loading} />
      <br />
      {Math.floor(progress)}
    </div>
  );
};

export default ProgressBar;
