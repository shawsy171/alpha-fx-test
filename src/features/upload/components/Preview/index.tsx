import React from 'react'
import { isValid } from '../../utils';
import { csvFormatter } from './../../services/csv-formatter';

interface PreviewProps {
  fileContents: string;
  errors: string[];
  setErrors: (errors: string[]) => void;
}

const Preview = ({ fileContents, errors, setErrors }: PreviewProps) => {  
  const filteredCSV = csvFormatter(fileContents as string) || [[]];

  return (
    <div >
      
      <table>
        <TableHeader filteredCSV={filteredCSV} />
        <TableBody filteredCSV={filteredCSV} />
      </table>
      <Errors errors={errors} />
      
    </div>
  )
}

export default Preview

function TableBody({ filteredCSV }:{ filteredCSV: string[][]}) {
  return <tbody>
    {filteredCSV.length > 1 && [...filteredCSV]

      .slice(1)
      .map((row, rowIndex) => <tr key={rowIndex}>
        {row.map((item, i) => {
          return <td className={`${!isValid(item) ? 'invalid' : ''}`} key={i}>
            {`${!isValid(item) ? 'Invalid data' : item}`}
          </td>;
        })}
      </tr>)}
  </tbody>;
}

function TableHeader({ filteredCSV }:{ filteredCSV: string[][]}) {
  return <thead>
    <tr>
      {filteredCSV[0].map((colHeader, i) => <th key={i}>{colHeader.toUpperCase()}</th>)}
    </tr>
  </thead>;
}

function Errors({errors}: {errors: string[]}) {
  return (<ul>
    {errors.map((error, index) => (
      <li className="data-error" key={index}>
        <span className="material-symbols-outlined">
          close
        </span>
        <div>
          <h4>Data Error</h4>
          <p>{error}</p>
        </div>
      </li>
    ))}
  </ul>);
}
