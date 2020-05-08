function sendText(id, text) {
  const url = `${TELEGRAM_URL}/sendMessage?chat_id=${id}&text=${encodeURIComponent(
    text
  )}`;

  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}
