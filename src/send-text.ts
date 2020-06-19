import { objToUrlParams } from './obj-url-params';
import { TELEGRAM_URL } from './settings';

export function sendText(chatId: string | number, text: string) {
  const options = {
    chat_id: chatId,
    text: encodeURIComponent(text),
    // parse_mode: 'MarkdownV2',
  };

  const url = `${TELEGRAM_URL}/sendMessage?${objToUrlParams(options)}`;

  const response = UrlFetchApp.fetch(url);
}
