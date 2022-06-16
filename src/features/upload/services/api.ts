import axios from "axios";
import { convertToJson } from './convert-to-json';

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/cbca762d-3f84-4ae4-bb26-79fa774a6c72",
});

 const formatJson = (json: any[]) => {
  return json.map((invoice) => {
    return {
      name: invoice["Payment Reference"],
      id: invoice["Beneficiary ID"] + '-' + invoice["Payment Reference"].replace(/\s/g, '-'),
      amount: invoice["Payment Amount"],
      currency: invoice["Payment Currency"],
      reference: invoice["Payment Reference"]
    }
  })
 }

export const submitData = async (fileContents: string) => {
  const json = await convertToJson(fileContents as string)
  // format data for submission
  console.log({json});
  
  try {
    // const response = await api.post("/", formatJson(json));
    const response = {
      status: 200,
      data: {
        message: "Successfully uploaded",
      }
    }
    // response.status = 400;
    
    if(!(response.status === 200)) {
      // add error boundary 
      return { status: 'error', message: 'Something went wrong with the upload' };
    }

  
    return response.data;
    
  } catch (error: any) {
    return { status: 'error', ...error };
  }
}