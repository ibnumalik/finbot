import { SS_ID } from '../settings';

export class Spreadsheet {
  /**
   * Append new row to the given sheet.
   *
   * @param content The content to append, must be an array to represent columns.
   * @param name The name of the sheet to append to.
   */
  public static appendRow(content: any[], name = 'logs') {
    return SpreadsheetApp.openById(SS_ID)
      .getSheetByName(name)
      .appendRow(content);
  }
}
