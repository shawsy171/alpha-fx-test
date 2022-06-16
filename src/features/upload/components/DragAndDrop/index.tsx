import React, { useCallback } from 'react'
import { useDropzone } from "react-dropzone";
import { getErrors } from '../../services/get-errors';
import { IToastNotification } from '../../types';

interface DragAndDropProps {
  setErrors: (errors: string[]) => void;
  setFileContents: (fileContent: string) => void;
  setToastNotification: (toastNotification: IToastNotification | null) => void;
}

const DragAndDrop = ({ setErrors, setFileContents, setToastNotification }: DragAndDropProps) => {

  const onDrop = useCallback((acceptedFiles: any[]) => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading failed");
    
    reader.onload = () => {
      const fileContents = (reader.result as string)?.replace(/[^a-z0-9,\.\s]/gi, '');
      
      setFileContents(fileContents);
      setErrors(getErrors(fileContents));
      setToastNotification(null);
    };

    // read file contents
    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <form {...getRootProps()} >
      <label className="dnd" htmlFor="dnd">
        <p className="title">Drag & Drop</p>
        <p>Supported file types<span className="file-type">.csv</span></p>
      </label>
      <input name="dnd" {...getInputProps()} />
    </form>
  )
}

export default DragAndDrop