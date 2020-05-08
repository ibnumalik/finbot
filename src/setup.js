
function getMe() {
  const url = TELEGRAM_URL + "/getMe";
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebhook() {
  const url = TELEGRAM_URL + '/setWebhook?url=' + WEB_APP_URL;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}
