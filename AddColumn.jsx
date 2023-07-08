import { useState } from 'react';
import { addColumnToSheet } from './path/to/addColumnToSheet';

function AddColumnForm() {
  const [columnName, setColumnName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE';
    await addColumnToSheet(spreadsheetId, columnName);
  };

  const handleChange = (event) => {
    setColumnName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Column Name:
        <input type="text" value={columnName} onChange={handleChange} />
      </label>
      <button type="submit">Add Column</button>
    </form>
  );
}
