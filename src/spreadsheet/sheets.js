function addRow(content, name = 'logs') {
  return SpreadsheetApp.openById(SS_ID).getSheetByName(name).appendRow(content);
}
