function logs(text) {
  const context = text.split(' ')[0];

  addRow([new Date(), context, text]);
}
