import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

const EditImg = ({ setPersonImg }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    setPersonImg(acceptedFiles[0]);
    //console.log(acceptedFiles[0]);
    return () => {
      false;
    };
  }, [acceptedFiles]);
  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
      </aside>
    </section>
  );
};

export { EditImg };
