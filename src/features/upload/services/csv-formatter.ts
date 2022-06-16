import Papa from "papaparse";

export const csvFormatter = (fileContents: string) => {  
  const csv = Papa.parse<string[]>(fileContents as string, {})
  
  const filteredCSV = csv.data.filter((row) => {
    console.log(row.length);
    return row.length === csv.data[0].length
  });

    
  return filteredCSV;
}
