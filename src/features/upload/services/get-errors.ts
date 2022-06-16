import { isValid } from '../utils';
import { csvFormatter } from './csv-formatter';

export const getErrors = (fileContents: string): string[] => {
  const filteredCSV = csvFormatter(fileContents as string)
  const errors: string[] = [];

  filteredCSV.forEach((row, rowIndex) => {
    row.forEach((item, i) => {
      if(!isValid(item)) {
        errors.push(`Row ${rowIndex}, column ${i} - has invalid data`)
      }
    })
  })

  return errors;
}
