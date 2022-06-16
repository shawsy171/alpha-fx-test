import csvToJson from 'csvtojson'; 

export const convertToJson = async (fileContents: string) => {
  const json = await csvToJson()
      .fromString(fileContents as string)
      
  console.log(json);
  return json
}