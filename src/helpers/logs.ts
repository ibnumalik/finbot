import { Spreadsheet } from '../spreadsheet/sheets';

export function logs(text: any) {
  const context = text.split(' ')[0];

  Spreadsheet.appendRow([new Date(), context, text]);
}
