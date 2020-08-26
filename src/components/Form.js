import React, { useState } from "react";
import ProgressBar from "./ProgessBar";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

  const changeHandler = e => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Let's upload something fun - .jpg .jpeg .png .gif");
    }
  };

  return (
    <form>
      <label htmlFor="file">
        +<input type="file" id="file" onChange={changeHandler} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Form;
