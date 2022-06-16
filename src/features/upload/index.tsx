import React from 'react'
import DragAndDrop from './components/DragAndDrop';
import Preview from './components/Preview';
import Submit from './components/Submit';
import { IToastNotification } from './types';


const Upload = () => {
  const [fileContents, setFileContents] = React.useState<string>('');
  const [errors, setErrors] = React.useState<string[]>([]);
  const [toastNotification, setToastNotification] = React.useState<IToastNotification | null>();
  
  return (
    <div>
      {toastNotification && (
        <div className={`toast-notification ${toastNotification.status}`}>
          {toastNotification.message}
        </div>)
      }
      <div className="upload">
        <DragAndDrop 
          setFileContents={setFileContents}
          setErrors={setErrors}
          setToastNotification={setToastNotification}
        />
        <div>
          {fileContents && <Preview
            fileContents={fileContents}
            errors={errors}
            setErrors={setErrors}
          />}
          {errors.length === 0 && fileContents && <Submit 
            fileContents={fileContents}
            errors={errors}
            setToastNotification={setToastNotification}
          />}
        </div>
      </div>
    </div>
  )
}

export default Upload;
