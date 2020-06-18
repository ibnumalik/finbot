function sendText(chat_id, text) {
  const options = {
    chat_id,
    text: encodeURIComponent(text),
    // parse_mode: 'MarkdownV2',
  };

  const url = `${TELEGRAM_URL}/sendMessage?${objToUrlParams(options)}`;

  const response = UrlFetchApp.fetch(url);
}
