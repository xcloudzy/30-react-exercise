import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  return (
    <>
      <div style={{ backgroundColor: "#242424", color: "white" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div>
          {file && (
            <img
              class="img-fluid"
              src={URL.createObjectURL(file)}
              alt="Loading"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
