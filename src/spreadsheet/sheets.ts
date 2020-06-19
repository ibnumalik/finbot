import { SS_ID } from '../settings';

export function addRow(content: any, name = 'logs') {
  return SpreadsheetApp.openById(SS_ID).getSheetByName(name).appendRow(content);
}
