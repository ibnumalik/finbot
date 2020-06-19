import { Help } from './app/help';
import { logs } from './helpers/logs';
import { ADMIN_ID } from './settings';
import { sendText } from './telegram/send-text';
import { TelegramUpdate } from './telegram/Telegram';

export function doPost(e: GoogleAppsScript.Events.DoPost) {
  try {
    const data: TelegramUpdate = JSON.parse(e.postData.contents);
    const text = data.message.text;
    const chatId = data.message.chat.id;
    const chatName =
      data.message.chat.first_name + ' ' + data.message.chat.last_name;

    /* Logs message for debugging. */
    logs(text);
    /* Report if someone try to use the bot. */
    if (chatId !== +ADMIN_ID) {
      sendText(ADMIN_ID, `Someone trying to use this bot: ${chatName}`);
      return sendText(chatId, 'Unauthorized User');
    }

    /* Tokenize text message to get the first word to determine command to run. */
    const command = text.split(' ');

    switch (command[0]) {
      case '/help':
      case 'help':
        const help = new Help();
        return sendText(chatId, help.text);

      // case '/add':
      // case 'add':
      //   add(chatId, command);
      //   break;

      default:
        sendText(
          chatId,
          'Commands not available. Type /help to see available commands.'
        );
        break;
    }
  } catch (e) {
    logs(JSON.stringify(e));
    sendText(ADMIN_ID, `Error: ${JSON.stringify(e, null, 4)}`);
  }
}
