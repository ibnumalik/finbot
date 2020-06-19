import { addRow } from './spreadsheet/sheets';

export function logs(text: any) {
  const context = text.split(' ')[0];

  addRow([new Date(), context, text]);
}
