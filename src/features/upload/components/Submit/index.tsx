import React from 'react'
import { submitData } from '../../services/api';
import { IToastNotification } from '../../types';

interface SubmitProps { // call this Preview
  fileContents: string;
  errors: string[];
  setToastNotification: (toastNotification: IToastNotification) => void;
}

const Submit = ({ fileContents, errors, setToastNotification }: SubmitProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const res = await submitData(fileContents);
    if(res.status === 'error') {
      setToastNotification({ status: 'failure', message: res.message})
    } else {
      setToastNotification({ status: 'success', message: "Data submitted successfully"})
    }
    setIsSubmitting(false);
  }
  return (
    <div className="button-container">
      <button
        onClick={handleSubmit}
        disabled={errors.length > 0}
      >Submit</button>
    </div>
  )
}

export default Submit